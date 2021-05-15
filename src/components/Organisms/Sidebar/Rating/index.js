import React, { useState, useContext } from 'react';
import sidebarContext from '../../../../context/sidebar/sidebarContext';
import userContext from '../../../../context/user/userContext';
import { Button, Div, Form } from '../../../Atoms';
import { Avatar, Input, Textarea } from '../../../Molecules';
import SetRating from '../../SetRating';
import Title from '../Title';

const Index = () => {

  const { CONSTANT, handleShowSidebar } = useContext(sidebarContext);
  const { user } = useContext(userContext);

  const [ data, setData ] = useState({});
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => console.log(data);

  return (
    <>
      <Div flex="1">
        <Title handleBack={() => handleShowSidebar(CONSTANT.task)} title="Rating"/>
        <Avatar user={user}/>
        <Form>
          <SetRating onChange={handleChange}/>
          <Input label="title" name="title" onChange={e => handleChange(e)}/>
          <Textarea label="Comment" name="comment" onChange={e => handleChange(e)}/>
        </Form>
      </Div>
      <Button width="100%" onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default Index
