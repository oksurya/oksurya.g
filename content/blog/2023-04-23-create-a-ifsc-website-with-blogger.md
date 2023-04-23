---
title: Create a IFSC Website with Blogger
description: Learn how to create a professional IFSC website with our easy-to-follow step-by-step guide using the popular platform, Blogger.
date: 2023-04-23T18:06:12.796Z
preview: /posts/ifsc-blogger.png
draft: true
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

1. Enable the Blogger API in Google Cloud Console.
2. Download and install the latest version of Python on your computer, ensuring that you select the "add to path" option during installation.
3. Follow the code and instructions provided below to automate the process of creating and publishing posts on your Blogger blog using Python and the Blogger API. This will save you time and effort in the long run.

### Step 1: Creating a Python Code for Converting IFSC to Markdown

Go to "**My Computer**" and select the location where you want to store the files. Create a new folder and name it whatever you like. For example, you could name it "**IFSC to Blogger**".

Next, create a new file called `csvtomd.py` which will be responsible for converting the **CSV to Markdown** files and storing them in the folder you just created.

To get the latest IFSC list in CSV format, you can download it from the [Razorpay IFSC repository](https://github.com/razorpay/ifsc/releases).

Now, let's create a Python code for converting CSV to Markdown.

#### Code for csvtomd.py
```
# CODE BY JAYASURYA MAILSAMY

import csv
import os

# Create the ifscposts directory if it doesn't already exist
if not os.path.exists('ifscposts'):
    os.mkdir('ifscposts')

# Open the CSV file and loop through the rows
with open('ifsc.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        ifsc = row['IFSC']
        filename = f"ifscposts/{ifsc}.md"
        with open(filename, 'w') as mdfile:
            mdfile.write(f"---\n")
            for key, value in row.items():
                mdfile.write(f"{key.lower()}: {value}\n")
            mdfile.write(f"---\n\n")
            mdfile.write(f"<table>\n")
            mdfile.write(f"<tbody>\n")
            for key, value in row.items():
                mdfile.write(f"<tr>\n")
                mdfile.write(f"<td>{key}</td>\n")
                mdfile.write(f"<td>{value}</td>\n")
                mdfile.write(f"</tr>\n")
            mdfile.write(f"</tbody>\n")
            mdfile.write(f"</table>\n")

print('Markdown files created successfully')
```
The code above saves the converted MD files in a folder named `ifscposts`.

### Step 2: Creating a Python code to automate posting to Blogger

Create an ``mdtoblogger.py`` file in the folder you previously created. This code will allow you to post IFSC markdown posts to your Blogger account within seconds.

let's create a Python code for Markdown to Blogger.

#### Code for mdtoblogger.py

```
# CODE BY JAYASURYA MAILSAMY

import os
import requests

# Set up the API endpoint and headers
blog_id = 'BLOG_ID'
api_url = 'https://www.googleapis.com/blogger/v3/blogs/' + blog_id + '/posts/'
api_key = 'ACCESS_TOKEN'
headers = {
    'Authorization': 'Bearer ' + api_key,
    'Content-Type': 'application/json'
}

# Set up the path to the folder containing the Markdown posts
folder_path = 'ifscposts'

# Loop through each file in the folder
for filename in os.listdir(folder_path):
    if filename.endswith('.md'):
        # Open the Markdown file and read its contents
        with open(os.path.join(folder_path, filename), 'r', encoding='utf-8') as file:
            post_content = file.read()

        # Split the frontmatter from the Markdown content
        frontmatter, content = post_content.split('---\n', 2)[1:]

        # Parse the frontmatter into a dictionary
        frontmatter_dict = {}
        for line in frontmatter.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                frontmatter_dict[key.strip()] = value.strip()

        # Create the Blogger post payload
        payload = {
            'kind': 'blogger#post',
            'blog': {
                'id': blog_id
            },
            'title': f'{frontmatter_dict["branch"]} - {frontmatter_dict["ifsc"]} IFSC Code Details',
            'content': content,
            'labels': frontmatter_dict['branch'].split(','),
            'labels': frontmatter_dict['state'].split(','),
            'labels': frontmatter_dict['district'].split(','),
            'labels': frontmatter_dict['city'].split(','),
            'labels': frontmatter_dict['bank'].split(','),
            
        }

        # Make the API request to create the Blogger post
        response = requests.post(api_url, headers=headers, json=payload)

        # Check the response status code for errors
        if response.status_code != 200:
            print(f'Error creating post: {response.text}')
        else:
            print('Post created successfully.')
            os.remove(os.path.join(folder_path, filename))

```
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





