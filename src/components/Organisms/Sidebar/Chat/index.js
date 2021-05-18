import React from 'react';
import { Chat, Message } from './styled';

const index = () => {
  return (
    <Chat>
      <Message me>Lorem ipsum is placeholder text</Message>
      <Message>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Message>
      <Message>Lorem ipsum is placeholder text commonly used in the graphic</Message>
      <Message me>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</Message>
      <Message>Lorem ipsum</Message>
      <Message me>Lorem ipsum is placeholder text</Message>
      <Message me>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Message>
      <Message>Lorem ipsum is placeholder text commonly used in the graphic</Message>
      <Message me>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</Message>
      <Message me>Lorem ipsum</Message>
    </Chat>
  )
}

export default index
