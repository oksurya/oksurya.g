import React from 'react';

function Profile() {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const name = cookies.find(cookie => cookie.startsWith('name='));
  const email = cookies.find(cookie => cookie.startsWith('email='));

  return (
    <div>
      { name && email ? (
        <div>
          <p>Name: {name.substring(5)}</p>
          <p>Email: {email.substring(6)}</p>
        </div>
      ) : (
        <p>No name or email found in cookies</p>
      )}
    </div>
  );
}

export default Profile;