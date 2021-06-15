import React, { useState, useEffect, useRef } from 'react';
import socket from 'components/Organisms/Socket';

const Chat = ({ name }) => {
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    socket.emit("conectado", name)
  }, [name]);

  useEffect(() => {
    socket.on("messages", message => {
      setMessages([...messages, message])
    });

    return () => {socket.off()}
  }, [messages]);

  const chatRef = useRef(null);
  useEffect(() => {
    chatRef.current.scrollIntoView({behavior: "smooth"})
  })

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit("message", name, message);
    setMessage("");
  };

  return (
    <div>
      <div className="chat">
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.name} - {msg.message}</p>
          </div>
        ))}
        <div ref={chatRef}/>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Deja un mensaje"></textarea>
        <button>Enviar mensaje</button>
      </form>
    </div>
  )
}

export default Chat
