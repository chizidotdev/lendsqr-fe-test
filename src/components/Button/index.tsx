import './button.scss';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
