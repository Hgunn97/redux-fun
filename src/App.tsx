import { ReactElement, useEffect, useState } from 'react';
import { loginUrl, validateLogin } from '../Server/Auth';

function App(): ReactElement {
  const { token } = validateLogin();

  useEffect(() => {
    if (!token) return;
  }, [token]);

  if (!token) {
    window.location.href = loginUrl;
  }

  return (
    <>
      <h1>Top Spotify App</h1>
      <p>{token ? 'Token saved' : 'No token found'}</p>
    </>
  );
}

export default App;
