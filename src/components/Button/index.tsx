import React from 'react';

interface ButtonI {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonI> = ({ text, className, onClick = () => {} }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
