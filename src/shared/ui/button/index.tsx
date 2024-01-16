import React from 'react';
import './index.scss';

interface ButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, href, target}) => {
  return (
    <a href={href} target={target} className='button'>
      {children}
    </a>
  )
}

export default Button;