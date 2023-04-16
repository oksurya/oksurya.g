---
title: How to Create a Post View Widget for Each Post in Blogger Blog using Firebase
description: Learn how to track post views on your Blogger blog by creating a post view widget for each post using Firebase. This step-by-step guide will show you how to set up Firebase, create a Firebase database, and deploy a Firebase function to track post views on your blog.
date: 2023-04-16T22:49:29.604Z
preview: ""
draft: false
tags:
  - Blogger
  - Firebase
  - Blogger Tutorials
categories: []
---

In case you're a blogger, you would possibly want to understand how frequently your blog posts are considered. Via understanding which posts are famous, you may create extra content that your readers will love. In this educational, we'll show you the way to create a post view widget for every post in your Blogger blog the use of Firebase.
### Step 1: Create a Firebase account
First, create a Firebase account if you haven't already. Firebase is a backend platform that provides offerings like authentication, database, and website hosting.
### Step 2: Create a Firebase project
Create a new Firebase project and give it a name. Once your venture is created, click on "add Firebase in your internet app" and replica the configuration code.
### Step 3: upload Firebase to your Blogger weblog
To your Blogger dashboard, go to "subject matter" and click on "Edit HTML". Locate the top phase and paste the Firebase configuration code inner it.
### Step 4: Create a new Firebase database
On your Firebase console, click on "Database" after which "Create Database". Pick out "start in check mode" and pick out a region. Click on "allow" to create your new database.
### Step 5: set up Firebase Realtime Database rules
Click on "guidelines" for your Firebase console and set your database regulations to allow examine and write get admission to to authenticated customers. Save your policies.
### Step 6: Create a new function in Firebase functions
To your Firebase console, click on "features" after which "Create a function". Pick "HTTP" as your trigger and provide your characteristic a name. Paste the following code:

```
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.increasePostView = functions.https.onRequest((req, res) => {
  const postId = req.query.postId;
  const postRef = admin.database().ref(`posts/${postId}`);
  postRef.transaction((currentData) => {
    if (!currentData) {
      return { views: 1 };
    }
    currentData.views++;
    return currentData;
  })
  .then(() => {
    res.status(200).send('Post view increased');
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error increasing post view');
  });
});

```
This feature will boom the view count number of a submit in your Firebase database every time it's called.
### Step 7: deploy your Firebase function
Click on "deploy" to install your Firebase characteristic.
### Step 8: upload the publish view widget in your Blogger weblog
On your Blogger dashboard, visit "format" and click on "upload a gadget". Choose "HTML/JavaScript" and paste the subsequent code:
```
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>
<script>
  var firebaseConfig = {
    // Paste your Firebase configuration code here
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
<script>
  function increasePostView(postId) {
    const url = `https://<your-project-id>.cloudfunctions.net/increasePostView?postId=${postId}`;
    fetch(url)
      .then(() => console.log('Post view increased'))
      .catch((error) => console.error(error));
  }
</script>
<script>
  const postId = '<data:post.id/>';
  increasePostView(postId);
</script>
```
### Conclusion
In end, developing a submit view widget for every post on your Blogger blog the use of Firebase is a extraordinary manner to tune the recognition of your content material and advantage insights into your readers' preferences. With Firebase, you may without difficulty set up a database to save and tune put up views, and installation a function to growth the view count number every time a post is loaded. By following the stairs outlined on this tutorial, you may create a post view widget in your blog and gain precious information to tell your content material advent.