---
title: Create a IFSC Website with Blogger
date: 2023-04-23 18:06:12.796000000 Z
description: Learn how to create a professional IFSC website with our easy-to-follow
  step-by-step guide using the popular platform, Blogger.
preview: "/posts/ifsc-blogger.png"
draft: false
tags:
- Blogger
categories: []
---

![IFSC website using Blogger](/posts/ifsc-blogger.png)

Hello there!

In this article, I will guide you through the process of creating a complete Automatic IFSC website using the easy-to-use Blogger platform.

This tutorial is straightforward, and you can even make money by creating your own IFSC website.

Follow along and discover how simple it is to create your own profitable online resource.

> This tutorial demonstrates how to automatically create posts on Blogger using Python, eliminating the need for manual posting.

Before you begin, it is essential to set up the necessary requirements. There are,

1. Enable the Blogger API in [Google Cloud Console](https://console.cloud.google.com/marketplace/product/google/blogger.googleapis.com).
2. Download and install the [latest version of Python](https://www.python.org/downloads/) on your computer, ensuring that you select the "**add to path**" option during installation.
3. Follow the code and instructions provided below to automate the process of creating and publishing posts on your Blogger blog using Python and the Blogger API. This will save you time and effort in the long run.

### Step 1: Creating a Python Code for Converting IFSC to Markdown

Go to "**My Computer**" and select the location where you want to store the files. Create a new folder and name it whatever you like. For example, you could name it "**IFSC to Blogger**".

Next, create a new file called `csvtomd.py` which will be responsible for converting the **CSV to Markdown** files and storing them in the folder you just created.

To get the latest IFSC list in CSV format, you can download it from the [Razorpay IFSC repository](https://github.com/razorpay/ifsc/releases).

Now, let's create a Python code for converting CSV to Markdown.

#### Code for csvtomd.py

> The code cannot be displayed in this article due to a policy violation by Google. However, you can download it by following the link provided.

To download the csvtomd file, please follow this link: https://tinyurl.com/3b7xfxw8.

The code above saves the converted MD files in a folder named `ifscposts`.

### Step 2: Creating a Python code to automate posting to Blogger

Create an ``mdtoblogger.py`` file in the folder you previously created. This code will allow you to post IFSC markdown posts to your Blogger account within seconds.

let's create a Python code for Markdown to Blogger.

#### Code for mdtoblogger.py

To download the mdtoblogger file, please follow this link: https://tinyurl.com/5n6kr882.

Replace "**BLOG_ID**" with your blog ID, which you can find in the Blogger dashboard URL like this: `https://draft.blogger.com/blog/posts/BLOG_ID`.

Replace "**ACCESS_TOKEN**" with your authorization token, which you can obtain from https://developers.google.com/oauthplayground/.

Let's take a look at how to generate an access token:

Click on the "Blogger API v3" option and select `https://www.googleapis.com/auth/blogger`. Then, click on the "Authorize APIs" button. 

You will be redirected to a Google account chooser page where you can select the account associated with your Blogger blog.

You will see the authorization code in a text box. Click the button "**Exchange authorization code for tokens**" to get your refresh token and access token. 

Your access token is valid for only one hour, and if you need to get a new one, click the "**Refresh access token**" button. 

Once you get a new access token, remove the old one and replace it with the new one.

Once the post is created, it will be displayed in the terminal as "**Post created successfully**" and the markdown file of the created post will be automatically deleted.

Visit your Blogger dashboard. You will now be able to see the IFSC posts in table format.

You can view demo posts at https://ifsc-details.blogspot.com.

## Conclusion

I hope that this article has been both helpful and informative to you. By following the steps outlined in this guide, you should be able to create your own IFSC website using the Blogger platform. If you have any questions or run into any issues along the way, don't hesitate to reach out for assistance. Best of luck with your new website!





