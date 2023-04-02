import React, { useState } from 'react';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useRef } from 'react';
const InstagramEmbedGenerator = () => {
  const [url, setUrl] = useState('');
  const [height, setHeight] = useState('600');
  const [width, setWidth] = useState('500');
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

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
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




<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
        <form onSubmit={handleSubmit} class="mt-8 space-y-8">
            <div>
            <label for="url" class="block text-sm font-medium text-gray-600">Instagram Link</label>
            <div class="mt-1">
<input type="text" value={url} onChange={handleUrlChange} maxlength="15525" required="" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

    </div>
    </div>

    <div>
            <label for="height" class="block text-sm font-medium text-gray-600">Embed Height</label>
            <div class="mt-1">
<input type="number" value={height} onChange={handleHeightChange} maxlength="125" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

    </div>
    </div>

    

    <button type="submit" className="group relative flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 py-2.5 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Generate Embed Code
        </button>
    
    </form>

    {code && (
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-600">Embed Code:</label>
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









    
  
    </Layout>
  );
};
export const Head = () => <Seo title="Instagram Embed Tool" description="Embed your favorite Instagram photos, videos, and reels on your website or blog with our Instagram Embed Generator."/>

export default InstagramEmbedGenerator;
