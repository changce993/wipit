import React, { useState, useContext } from 'react';
import sidebarContext from '../../../../context/sidebar/sidebarContext';
import userContext from '../../../../context/user/userContext';
import { Avatar, Input, Textarea } from '../../../Molecules';
import SetRating from '../../SetRating';
import Template from '../Template';

const Index = () => {

  const { CONSTANT, handleShowSidebar, handleHiddeSidebar } = useContext(sidebarContext);
  const { user } = useContext(userContext);

  const [ data, setData ] = useState({});
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => handleHiddeSidebar();

  const cta = {
    handler: handleSubmit,
    value: 'Submit'
  }

  return (
    <Template handleBack={() => handleShowSidebar(CONSTANT.task)} title="Rating" cta={cta}>
      <Avatar user={user}/>
      <SetRating onChange={handleChange}/>
      <Input label="title" name="title" onChange={e => handleChange(e)}/>
      <Textarea label="Comment" name="comment" onChange={e => handleChange(e)}/>
    </Template>
  )
}

export default Index
