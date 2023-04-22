import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';




function OneTap() {

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
      useEffect(() => {
        const el = document.createElement('script')
        el.setAttribute('src', 'https://accounts.google.com/gsi/client')
        el.onload = () => initializeGSI();
        document.querySelector('body').appendChild(el)
      }, [])

 
}

export default OneTap;