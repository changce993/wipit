import React from 'react';
import { Input, Label } from 'components/Atoms';

const index = ({ label, ...props }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Input {...props}/>
    </div>
  )
}

export default index
