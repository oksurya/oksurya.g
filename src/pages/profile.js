import React from 'react';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
function OtherPage() {
  const name = getCookie('name');
  const email = getCookie('email');
  
  return (
    <div className="OtherPage">
      <h1>Welcome to the other page</h1>
      <p>Username: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default OtherPage;
