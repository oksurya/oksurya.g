import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  const [username, setName] = useState('');
  const [useremail, setEmail] = useState('');
  const onOneTapSignedIn = response => {
    setIsSignedIn(true)
    const decodedToken = jwt_decode(response.credential)
    setUserInfo({...decodedToken})
     // set the cookies
  document.cookie = `name=${decodedToken.name};path=/;max-age=86400`;
  document.cookie = `email=${decodedToken.email};path=/;max-age=86400`;
  document.cookie = `picture=${decodedToken.picture};path=/;max-age=86400`;

  window.location.reload();
  }

  const initializeGSI = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  
    // check if name and email exist in cookies
    const nameExists = cookies.some(cookie => cookie.startsWith('name='));
    const emailExists = cookies.some(cookie => cookie.startsWith('email='));
  
    if (nameExists && emailExists) {
      console.log('Name and email exist in cookies');
      return;
    }
  
    window.google.accounts.id.initialize({
      client_id: '151281518623-cobc3et8p2mgne4punvjnimth3q24eli.apps.googleusercontent.com',
      cancel_on_tap_outside: false,
      callback: onOneTapSignedIn
    });
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        console.log(notification.getNotDisplayedReason())
      } else if (notification.isSkippedMoment()) {
        console.log(notification.getSkippedReason())
      } else if(notification.isDismissedMoment()) {
        console.log(notification.getDismissedReason())
      }
    });
  }
  const signout = () => {
    // refresh the page
    document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  }

  useEffect(() => {
    const el = document.createElement('script')
    el.setAttribute('src', 'https://accounts.google.com/gsi/client')
    el.onload = () => initializeGSI();
    readCookies();
    document.querySelector('body').appendChild(el)
  }, [])
 
  const readCookies = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const nameCookie = cookies.find(cookie => cookie.startsWith('name='));
    const emailCookie = cookies.find(cookie => cookie.startsWith('email='));
    if (nameCookie) {
      setName(nameCookie.split('=')[1]);
    }
    if (emailCookie) {
      setEmail(emailCookie.split('=')[1]);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
    
     {useremail && (
          <div>
            <p>Welcome, {username} ({useremail})</p>
            <button onClick={signout}>Sign out</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
