import './login.scss';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className='login container'>
      <header className='login__logo'>
        <img src='/assets/logo.svg' alt='lendsqr logo' />
      </header>

      <section className='login__body'>
        <aside className='login__illustration'>
          <img src='/assets/pablo-sign-in.svg' alt='Pablo sign in illustration' />
        </aside>

        <div className='login__form'>
          <h1 className='login__form--heading'>Welcome!</h1>
          <p className='login__form--instruction'>Enter details to login.</p>

          <form className='login__form--main' onSubmit={() => navigate('/dashboard')}>
            <Input name='email' type='email' placeholder='Email' required />
            <Input name='password' type='password' placeholder='Password' required />

            <a href='/'>forgot password?</a>

            <Button className='btn' type='submit'>
              Log in
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
