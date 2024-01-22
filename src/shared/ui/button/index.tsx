import React from 'react';
import './index.scss';

interface ButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({children, href, target, className}) => {
  return (
    <a href={href} target={target} className={`button ${className}`}>
      {children}
    </a>
  )
}

export default Button;