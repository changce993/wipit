import React from 'react';
import { Textarea, Label } from 'components/Atoms';

const index = ({ label, ...props }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Textarea {...props}/>
    </div>
  )
}

export default index
