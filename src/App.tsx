import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './utils/validationSchema';
import './App.css';

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register('name')} />
        <p>{errors.name?.message as React.ReactNode}</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        <p>{errors.password?.message as React.ReactNode}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
