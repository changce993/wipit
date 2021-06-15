import React, { useContext } from 'react';
import { Title, Close, ArrowLeft } from './styled';
import sidebarContext from 'context/sidebar/sidebarContext';

const Tittle = ({ title, handleBack }) => {
  const { handleHiddeSidebar } = useContext(sidebarContext);
  return (
    <Title>
      <Title justify="flex-start" gap=".5rem" as="span">
        {handleBack && <ArrowLeft onClick={handleBack}/>}
        {title}
      </Title>
      <Close onClick={handleHiddeSidebar}/>
    </Title>
  )
}

export default Tittle
