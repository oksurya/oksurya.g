import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import OneTap from './onetap';



function Profile() {
    const [username, setName] = useState('');
    const [useremail, setEmail] = useState('');
    const [userpicture, setPicture] = useState('');

    const readCookies = () => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const nameCookie = cookies.find(cookie => cookie.startsWith('name='));
        const emailCookie = cookies.find(cookie => cookie.startsWith('email='));
        const pictureCookie = cookies.find(cookie => cookie.startsWith('picture='));

        if (nameCookie) {
          setName(nameCookie.split('=')[1]);
        }
        if (pictureCookie) {
            setPicture(pictureCookie.split('=')[1]);
          }
        if (emailCookie) {
          setEmail(emailCookie.split('=')[1]);
        }
      };  


      useEffect(() => {
        readCookies();
      }, [])


      const signout = () => {
        // refresh the page
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload();
      }
  return (
    <><OneTap></OneTap>
    
    <div>
       <header className="App-header">
    
    {useremail && (
         <div>
            <img src={userpicture} width="300" height="300"/>
           <p>Welcome, {username} ({useremail})</p>
           <button onClick={signout}>Sign out</button>
         </div>
       )}
     </header>
    </div></>
  );
}

export default Profile;