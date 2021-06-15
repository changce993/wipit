import React, { useState } from 'react';
import Chat from './Chat';

const Index = () => {
  const [ name, setName ] = useState('');
  const [ isLogged, setIsLogged ] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(name !== "") {
      setIsLogged(true)
    }
  };

  return (
    <>
      {!isLogged ? (
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="name"/>
          <button>Ir al chat</button>
        </form>
      ) : (
        <Chat name={name}/>
      )}
    </>
  )
}

export default Index
