import React from "react";

export interface ButtonProps {
  className: string;
  value: string;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { className } = props;
  const { value } = props;

  return (
    <div className={`${className} flex justify-center items-center`}>
      {value}
    </div>
  );
};

export default Button;
