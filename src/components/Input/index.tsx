import './input.scss';
import React, { useState } from 'react';

type InputProps = React.ComponentPropsWithRef<'input'> & {
  name: string;
};

const Input = ({ className, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  if (props.type === 'password') {
    return (
      <div className='input-container'>
        <label htmlFor={props.name}>
          <input
            {...props}
            type={showPassword ? 'text' : 'password'}
            className={`input password ${className}`}
          />
          <span className='toggle' onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </label>
      </div>
    );
  }

  return (
    <div className='input-container'>
      <label htmlFor={props.name}>
        <input className={`input ${className && className}`} {...props} />
      </label>
    </div>
  );
};

export default Input;
