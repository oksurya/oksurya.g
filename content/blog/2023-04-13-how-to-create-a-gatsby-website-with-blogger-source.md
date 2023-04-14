---
title: How to Create a Gatsby Website with Blogger Source
description: ""
date: 2023-04-13T09:48:33.615Z
preview: ""
draft: true
tags:
  - Gatsby Tutorials
  - Blogger
  - Gatsby
  - Gatsby Plugins
categories: []
---
A way to Create a Gatsby site with Blogger source.
On this academic, i will show you how to create a Gatsby website that attracts weblog posts and pages from Blogger the use of the gatsby-source-blogger plugin. Gatsby is a contemporary framework for constructing rapid and comfortable websites the usage of React and GraphQL. Blogger is a famous platform for developing and hosting blogs at no cost.
### What You want
To comply with this tutorial, you may need:

- A fundamental knowledge of HTML, CSS and JavaScript
- A text editor or an IDE of your choice
- Node.js and npm hooked up for your device.
- A Blogger account and a weblog with some posts and pages
- A GitHub account and a repository to your internet site
- A Gatsby Cloud account for deploying your website.
Step 1: Create a new Gatsby web page.
The easiest way to start a brand-new Gatsby website online is to use the gatsby-cli tool. You could installation it globally the usage of npm:

### Step 1: Create a New Gatsby Site

The perfect way to start a new Gatsby site is to apply the gatsby-cli tool. You could deploy it globally the use of npm:

```
npm install -g gatsby-cli
```

Then, you could use the gatsby new command to create a brand new web page based totally on a starter template. In this case, we can use the gatsby-starter-blog-theme template, which already consists of the gatsby-subject-blog plugin for developing a blog site with minimum configuration.

```
gatsby new my-gatsby-site https://github.com/gatsbyjs/gatsby-starter-blog-theme

```

This may create a new folder known as my-gatsby-site with all the files and dependencies wanted to your site. You may change into that folder and run gatsby develop to start a local development server:

```
cd my-gatsby-site
gatsby develop
```
You can now open http://localhost:8000 for your browser and notice your web page. It have to look some thing like this:

### Step 2: Install and Configure the gatsby-source-blogger Plugin

To drag records from Blogger into your Gatsby website, you'll need to install and configure the gatsby-source-blogger plugin. This plugin is a source plugin that fetches weblog posts and pages from Blogger using their rest API.

To install the plugin, run the following command in your terminal:

```
npm install --save gatsby-source-blogger
```

Then, you'll want to feature a few alternatives to the plugin for your **gatsby-config.js** report. You could locate this file within the root of your project folder. Open it along with your textual content editor and look for the plugins array. Upload a brand new object with the subsequent properties:

Resolve: The call of the plugin, that's ‘gatsby-source-blogger’
Options: An item with a few alternatives for the plugin, together with:

- **ApiKey**: The API key for getting access to the Blogger API. You can get one from [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials) through growing a new challenge and enabling the Blogger API.
- **BlogId**: The id of your blog on Blogger. You could find it from [https://www.blogger.com/home](https://www.blogger.com/home) by using clicking on Settings > primary > blog deal with and copying the part after blogspot.Com/
- **DownloadImage**: A boolean value that determines whether or not to download the featured photo of every publish or no longer. Set it to real in case you want to apply the new GatsbyImage element for displaying dynamic photos.

```
plugins: [
  {
    resolve: "gatsby-theme-blog",
    options: {
      // ...
    },
  },
  {
    resolve: "gatsby-source-blogger",
    options: {
      apiKey: "your-api-key",
      blogId: "your-blog-id",
      downloadImage: true,
    },
  },
  // ...
],
```

Keep the file and restart your development server. You need to now be capable of question for statistics from Blogger the usage of GraphQL.


### Step 3: Query for Data from Blogger using GraphQL
Gatsby uses GraphQL as its information layer, which lets in you to query for any information you want in your additives the use of a declarative syntax. To discover the information to be had from Blogger, you may use the GraphQL tool that includes Gatsby. You can get right of entry to it by using beginning http://localhost:8000/___graphql on your browser.

You should see something like this:

At the left panel, you may find your GraphQL queries. At the proper panel, you can see the consequences of your queries. You may additionally use the docs and Explorer tabs to see the documentation and schema of your statistics.

The gatsby-source-blogger plugin adds two GraphQL sorts for your statistics layer: BloggerPost and BloggerPage. Those types constitute the weblog posts and pages from Blogger, and they have numerous fields that you may query for. As an example, you could query for the identify, content material, author, featured photo, and images of every post or page.

To look all the weblog posts from Blogger, you can use the following question:

```
{
  allBloggerPost {
    edges {
      node {
        slug
        title
        content
        author {
          displayName
          image {
            url
          }
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          url
        }
      }
    }
  }
}
```

This query will return an array of gadgets with the fields which you targeted for every put up. You could additionally use filters, sorting, pagination, and different alternatives to customize your query. You can examine more about GraphQL queries in Gatsby from https://www.gatsbyjs.Com/docs/graphql-reference/.

In addition, you may question for the pages from Blogger the use of the subsequent query:

```
{
  allBloggerPage {
    edges {
      node {
        slug
        title
        content
        author {
          displayName
          image {
            url
          }
        }
      }
    }
  }
}
```
### Step 4: Create Pages Programmatically from Data
Now which you have access to the records from Blogger, you could use it to create pages on your Gatsby site programmatically. Which means that you can use a template aspect and a GraphQL query to generate pages at build time based totally on the records.

To create pages programmatically, you'll want to apply the Gatsby Node APIs, which can be a set of functions that run in Node.Js for the duration of the build technique. You could access those APIs by means of exporting them from a report referred to as gatsby-node.Js in the root of your task folder.

In this case, we can use  APIs: createPages and createResolvers. The createPages API lets in you to create pages dynamically the use of a template aspect and a context object. The createResolvers API lets in you to feature custom resolvers for your GraphQL schema, which are features that return information for a selected field.

First, let’s create a template thing for our blog posts. You could create a brand new folder known as templates within the src folder of your challenge and upload a new document known as blog-post.js. This record will export a React thing that renders the information for each put up using the GatsbyImage issue for displaying the featured photograph and the MDXRenderer component for rendering the content material as Markdown.

The template component will look something like this:
```
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  const post = data.bloggerPost

  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author.displayName}</p>
      {post.featuredImage && (
        <GatsbyImage image={post.featuredImage.childImageSharp.gatsbyImageData} alt={post.title} />
      )}
      <MDXRenderer>{post.childMdx.body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    bloggerPost(id: { eq: $id }) {
      title
      author {
        displayName
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      childMdx {
        body
      }
    }
  }
`
```
Be aware that we are the use of a GraphQL question at the lowest of the file to fetch the facts for each publish through its identification. We are also the usage of a variable referred to as $id in our question, with the intention to be surpassed as a context object from the gatsby-node.js file.

Next, allows create a template issue for our pages. You could upload a new document called page.js within the templates folder with the following code:

```
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Page({ data }) {
  const page = data.bloggerPage

  return (
    <div>
      <h1>{page.title}</h1>
      <p>By {page.author.displayName}</p>
      <MDXRenderer>{page.childMdx.body}</MDXRenderer> </div> ) }
      
export const query = graphql  query($id: String!)
{
  bloggerPage(id: { eq: $id }) {
    title
    author {
      displayName
    }
    childMdx {
      body
    }
  }
}
```

This template component is similar to the blog post one, except that it does not have a featured image field.

Now, let's create the gatsby-node.js file and use the createPages and createResolvers APIs. You can add this file in the root of your project folder with the following code:

```javascript
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all blog posts and pages from Blogger
  const result = await graphql(`
    {
      allBloggerPost {
        nodes {
          id
          slug
        }
      }
      allBloggerPage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  // Create a page for each blog post using the blog-post template
  result.data.allBloggerPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    })
  })

  // Create a page for each page using the page template
  result.data.allBloggerPage.nodes.forEach(page => {
    createPage({
      path: `/pages/${page.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        id: page.id,
      },
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  // Create a custom resolver for the content field of BloggerPost and BloggerPage types
  // This resolver will transform the content from HTML to MDX using the gatsby-plugin-mdx package
  const mdxResolverPassthrough = fieldName => async (
    source,
    args,
    context,
    info
  ) => {
    const type = info.schema.getType(`Mdx`)
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    })
    const resolver = type.getFields()[fieldName].resolve
    const result = await resolver(mdxNode, args, context, {
      fieldName,
    })
    return result
  }

  createResolvers({
    BloggerPost: {
      content: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
    BloggerPage: {
      content: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}
```
Step 5: deploy Your website to GitHub Pages
Now which you have created your Gatsby internet site with Blogger source, you may deploy it to GitHub Pages using Gatsby Cloud. Gatsby Cloud is a platform that provides speedy and cozy web hosting for Gatsby websites with functions inclusive of incremental builds, actual-time previews, and integrations with various CMSs and facts assets.

To deploy your website to GitHub Pages the usage of Gatsby Cloud, you may want to do the following:

- Push your code to a GitHub repository
- Sign on for a Gatsby Cloud account the usage of your GitHub account
- Create a brand new web site on Gatsby Cloud by deciding on your GitHub repository
- Configure your site settings through deciding on a domain name and a department
- Join your web page to GitHub Pages by adding a custom domain and allowing HTTPS
- Look ahead to your web site to build and set up
- You could comply with this guide for more information on how to install your website to GitHub Pages the usage of Gatsby Cloud:  https://support.gatsbyjs.com/hc/en-us/articles/360052503654-Deploying-to-GitHub-Pages

Once your website is deployed, you could get entry to it with the aid of travelling https://your-github-username.github.io/your-repository-name/. You must see something like this:

### Conclusion

On this educational, you found out a way to create a Gatsby website with Blogger source the usage of the gatsby-source-blogger plugin. You furthermore mght found out the way to query for data from Blogger using GraphQL, a way to create pages programmatically from facts the usage of Gatsby Node APIs, how to rework statistics from HTML to MDX using gatsby-plugin-mdx, and how to deploy your internet site to GitHub Pages using Gatsby Cloud.

I am hoping you loved this academic and found it useful. When you have any questions or comments, feel unfastened to leave a comment beneath or attain out to me on Twitter @jayasuryatweet.
