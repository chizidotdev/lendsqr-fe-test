import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '..';

describe('Login', () => {
  const onSubmit = jest.fn();
  const setup = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('lendsqr logo should be rendered', () => {
    setup();
    expect(screen.getByAltText(/lendsqr logo/i)).toBeInTheDocument();
  });

  test('welcome message and instruction should be rendered', () => {
    setup();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/enter details to login/i)).toBeInTheDocument();
  });

  test('email input should be rendered', () => {
    setup();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  test('password input should be rendered', () => {
    setup();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('login button should be rendered', () => {
    setup();
    expect(screen.getByRole(/button/i)).toBeInTheDocument();
  });

  test('input elements should be empty on initial load', () => {
    setup();
    const emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(/password/i) as HTMLInputElement;

    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
});
