import React, { useState } from "react";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Nombre de usuario:</label>
      <input
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor='password'>Contraseña:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={handlePasswordChange}
      />

      <button type='submit'>Enviar</button>
    </form>
  );
}

export default LoginForm;
