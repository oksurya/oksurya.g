---
title: How to Add Random Quotes to Your Blogger Blog with JavaScript
description: ""
date: 2023-04-19T21:30:00.198Z
preview: /posts/quote-widget-blogger.png
draft: false
tags:
  - Blogger
  - Blogger Plugins
categories: []
---
![quote widget blogger](/posts/quote-widget-blogger.png)
Are you looking for a manner to feature a few extra pizzazz in your Blogger blog? Keep in mind incorporating dynamic random prices with JavaScript short codes. This simple script can automatically generate and display random costs on every occasion a reader masses your weblog submits.
## Step 1: Create a New HTML/Javascript Gadget
To get started out, you may need to create a new HTML/Javascript gadget in your Blogger Layout. Here's how:
1. Out of your Blogger dashboard, navigate to the "Layout" section.
2. Select "add a widget" where you want to show the random quotes.
3. Select "HTML/JavaScript" from the listing of devices.
## Step 2: Copy and Paste the Script
```
<div id="quote-container"></div>

<script>
// Define the shortcode
const shortcode = '[random-quote]';
// Check if the shortcode is present in the post body
if (document.body.innerHTML.includes(shortcode)) {
  // Fetch a random quote from an API
  fetch('https://api.quotable.io/random?maxLength=50')
    .then(response => response.json())
    .then(data => {
      // Get the quote container element
      const quoteContainer = document.getElementById('quote-container');
      // Create a new HTML element to display the quote
      const quoteElement = document.createElement('blockquote');
      quoteElement.innerHTML = `<p>${data.content}</p><cite>${data.author}</cite>`;
      // Add the quote element to the quote container
      quoteContainer.appendChild(quoteElement);
      // Replace the shortcode with the quote element in the post body
      document.body.innerHTML = document.body.innerHTML.replace(shortcode, quoteElement.outerHTML);
    })
    .catch(error => console.error(error));
}
</script>
```
## Step 3: Customize the Script
As soon as you have added the script, you could customize it to suit your options. As an example, you can alternate the maximum period of the fees by modifying the max Length parameter within the fetch URL.

## Step 4: Add Shortcodes to Your Blog Posts
To display a random quote in a weblog put up, without a doubt add the `[random-quote]` short code anywhere you'd just like the quote to seem. Whilst a reader hundred the put up, the short code will get replaced with a dynamic random quote from the API.

It is it! Through adding dynamic random charges in your Blogger weblog, you can make your content material more attractive and interactive on your readers.

## Final Thoughts
Including dynamic random quotes for your Blogger weblog is simply one instance of the many methods you could include JavaScript short codes into your blogging approach. With a touch bit of code and a few creativities, you may take your weblog to the subsequent level and provide a completely unique and memorable enjoy for your readers.