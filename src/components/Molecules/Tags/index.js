import React from 'react';
import { Tags } from './styled';
import { Tag } from '../../Atoms';

const index = ({ tags }) => {
  return (
    <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
  )
}

export default index
