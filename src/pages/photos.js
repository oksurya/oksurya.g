import React, { useState } from 'react';

const CLIENT_ID = '151281518623-cobc3et8p2mgne4punvjnimth3q24eli.apps.googleusercontent.com';
const SCOPE = 'https://www.googleapis.com/auth/photoslibrary';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${window.location.origin}&response_type=token&scope=${SCOPE}`;
    window.location.href = url;
  };

  const handleLogout = () => {
    setAccessToken('');
  };

  const handleDeleteAllMedia = async () => {
    try {
      const response = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      const mediaItems = data.mediaItems;

      for (const mediaItem of mediaItems) {
        await fetch(`https://photoslibrary.googleapis.com/v1/mediaItems/${mediaItem.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }

      alert('All media items have been deleted!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTokenChange = () => {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    if (accessToken) {
      setAccessToken(accessToken);
      window.location.hash = '';
    }
  };

  window.addEventListener('hashchange', handleTokenChange);

  return (
    <div>
      <h1>Delete All Media from Google Photos</h1>
      {accessToken ? (
        <>
          <button onClick={handleDeleteAllMedia}>Delete All Media</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default App;
