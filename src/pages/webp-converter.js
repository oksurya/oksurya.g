import React, { useState } from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [webpImage, setWebpImage] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setWebpImage('');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleConvertClick = () => {
    setIsConverting(true);
  
    // Convert to WebP format
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob((blob) => {
        const webpFile = new File([blob], 'image.webp', {
          type: 'image/webp',
          lastModified: Date.now(),
        });
        const webpUrl = URL.createObjectURL(webpFile);
        setWebpImage(webpUrl);
        setIsConverting(false);
  
        // Download the WebP image
        const link = document.createElement('a');
        link.href = webpUrl;
        link.download = 'image.webp';
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 'image/webp');
    };
  };


  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Layout >
    <>
    <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Image to WebP Converter</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Convert Your Images to WebP Format</p>
      </header>


      <div onDragOver={handleDragOver} onDrop={handleDrop} class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
          
<div>
    <label
        class="lg:h-64 flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
           
        </span>
        <input type="file" accept="image/*" onChange={handleFileChange} class="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-800"/>
    </label>
</div>

  
    <div
    >

{image && 
      <>
      
      <div id="image-container" className="text-center w-full p-4 border-2 border-dashed border-gray-300">
          <img src={image} alt="Selected" className="w-full h-auto" />
          <button onClick={handleConvertClick} className="m-5 bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-800">Download converted image</button>

        </div>



  </>
      }

     
    </div>
</div>
</div>

    <article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">

<p>
    WebP is a modern photograph layout evolved by Google that offers superior compression and first-class in comparison to other photo codecs like JPEG and PNG. WebP pics are smaller in size, load quicker, and improve internet site overall performance. But, not all browsers guide WebP snap shots, because of this you could need to use a WebP converter device to convert your images to this layout.
    </p><p>
The use of a WebP converter device is easy and can be carried out on line for free. Clearly add your image to the device, and it'll convert it to a WebP format. You may then download the WebP photo and use it on your website. A few WebP converter tools additionally will let you convert more than one snap shots right away, saving you effort and time.
</p><p>
The benefits of the usage of a WebP converter device are numerous. First and principal, WebP pictures are smaller in length than different codecs, which means they load faster. That is particularly essential for website proprietors who want to offer their site visitors with the nice viable person enjoy. Sluggish loading photos can cause high leap fees, which could negatively affect your website's search engine rankings.
</p><p>
In addition to faster load times, WebP pics additionally provide higher exceptional compared to different formats. Which means that you could have smaller photo sizes without sacrificing great. WebP images also aid transparency and animation, making them a versatile choice for all forms of photographs.
</p><p>
    Ultimately, the use of a WebP converter device is an clean manner to optimize your internet site's performance. Via reducing the size of your pics, you can improve your internet site's load times and standard performance. This may lead to accelerated consumer engagement, progressed seek engine rankings, and ultimately, more conversions.
    </p><p>
In conclusion, if you need to enhance your website's overall performance, the usage of a WebP converter tool is a need to. Through converting your pixy to WebP layout, you may lessen their length, improve their best, and in the long run, provide your visitors with a better person experience. First-rate of all, the use of a WebP converter device is straightforward, fast, and free, so there may be no cause not to start the use of one these days.
</p>


    </article>
    </>
    </Layout>
  );
};
export const Head = () => <Seo title="WebP Converter Tool | Convert Your Images to WebP Format"  description="Convert your images to WebP format with this free online tool. WebP images are smaller in size and load faster, improving your website's performance." />

export default ImageUploader;
