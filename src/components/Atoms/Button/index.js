import React from 'react';
import { Primary, Secondary, Light } from './styled';

const index = ({ children, is, bg, rounded, margin, width, type, disable, onClick, onChange, ...props }) => {
  const Button = is === 'secondary' ? Secondary : is === 'light' ? Light : Primary;

  return (
    <Button
      type={type || 'submit'}
      bg={bg}
      rounded={rounded}
      margin={margin}
      width={width}
      disable={disable}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}

export default index;
