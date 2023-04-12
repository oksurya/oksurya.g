import React, { useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { useRef } from 'react';
const InstagramEmbedGenerator = () => {
  const [url, setUrl] = useState('');
  const [height, setHeight] = useState('600');
  const [copySuccess, setCopySuccess] = useState(false);
  const textareaRef = useRef(null);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParts = url.split('/');
    const shortcode = urlParts[urlParts.length - 2];
    const src = `https://www.instagram.com/p/${shortcode}/embed/?cr=1&v=13&wp=540&rd=https%3A%2F%2Fwww.example.com&rp=%2F`;
    const iframe = `<iframe src="${src}" height="${height}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`;
    setCode(iframe);
    
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  
  const handleCopyClick = () => {
    if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand('copy');
      }
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };
  const [code, setCode] = useState('');

  return (
    <Layout>

<div class="mx-auto max-w-2xl text-center">
<h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Instagram Embed Generator</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">
Embed your favorite Instagram photos, videos, and reels on your website or blog with our Instagram Embed Generator.</p>
</div>




<div class="flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
        <form onSubmit={handleSubmit} class="mt-8 space-y-8">
            <div>
            <label htmlfor="url" class="font-bold">Instagram Link</label>
            <div class="mt-1">
<input type="text" value={url} onChange={handleUrlChange} maxlength="15525" required="" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

    </div>
    </div>

    <div>
            <label htmlfor="height" class="font-bold">Embed Height</label>
            <div class="mt-1">
<input type="number" value={height} onChange={handleHeightChange} maxlength="125" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

    </div>
    </div>

    

    <button type="submit" className="group relative flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-purple-800 py-2.5 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Generate Embed Code
        </button>
    
    </form>

    {code && (
  <div className="mt-3">
    <label htmlfor="codeem" className="font-bold">Embed Code:</label>
    <textarea ref={textareaRef} value={code} readOnly className="w-full p-2 border border-gray-400 rounded-md" rows="5" />
    <button onClick={handleCopyClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {copySuccess ? 'Copied!' : 'Copy'}
    </button>
  </div>
)}
{!code && (
  <p className="mt-4 text-gray-600">No code to copy yet. Please generate your Instagram embed code.</p>
)}
      
    </div>
    
     </div>
     <div className="prose mx-auto mt-12 max-w-2xl">
<p>
    The Instagram Embed tool in React JS is a web application that allows customers to embed Instagram posts into their personal websites or programs. React JS is a famous the front-quit framework used for building consumer interfaces. The Instagram Embed device constructed with React JS makes it easy for builders to embed Instagram posts into their net pages or programs, improving their content material and improving their consumer enjoy.
    </p><p>
The usage of the Instagram Embed device in React JS is easy and easy. It permits developers to embed Instagram posts via simply copying and pasting the Instagram post URL into the embed code. This removes the need to write down complicated code to embed Instagram posts, making it a user-pleasant and time-saving solution.
</p><p>
One of the key advantages of the use of the Instagram Embed device in React JS is that it may decorate the consumer enjoy of websites and packages. Through embedding Instagram posts, developers can add greater visual content material to their pages, making them more attractive and interactive for users. This will result in elevated person engagement and a higher universal person experience.
</p><p>
Some other gain of using the Instagram Embed device in React JS is that it may assist to increase social media engagement. Through embedding Instagram posts, developers can encourage users to engage with their content on social media structures, main to accelerated likes, stocks, and feedback.
</p><p>
The Instagram Embed device in React JS also gives builders the ability to personalize the arrival of embedded posts to healthy their internet site or application design. Developers can customise the dimensions, layout, and color scheme of the embedded Instagram posts to suit their emblem or layout aesthetic.
</p><p>
In conclusion, the Instagram Embed device in React JS is a beneficial and powerful software that lets in developers to effortlessly embed Instagram posts into their web sites or applications. By way of improving the consumer revel in and growing social media engagement, it could help to improve the general fulfillment of web sites and applications. With its consumer-pleasant interface and customization alternatives, the Instagram Embed tool in React JS is a valuable device for developers trying to upload extra visible content material to their internet pages or packages.
</p></div>

    






    
  
    </Layout>
  );
};
export const Head = () => <Seo title="Instagram Embed Tool" description="Embed your favorite Instagram photos, videos, and reels on your website or blog with our Instagram Embed Generator."/>

export default InstagramEmbedGenerator;