import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import { TypographyStyle } from 'react-typography'
import typography from '../../../utils/typography'
import {
    generateVideoThumbnails,
    importFileandPreview
  } from "@rajesh896/video-thumbnails-generator";

function App() {
 
    const [video, setVideo] = useState();
    const [thumbNumber, setThumbNumber] = useState(0);
    const [videoUrl, setVideoUrl] = useState("");
    const [videoThumb, setVideoThumb] = useState("");
    const [thumbnails, setThumbnails] = useState([]);
    const refs = useRef({
      video: null,
      loader: null,
      numberInput: null,
      thumbButton: null
    });
  
    useEffect(() => {
      if (video) {
        importFileandPreview(video).then((res) => {
          setVideoUrl(res);
        });
        setVideoThumb("");
        setThumbnails([]);
        if (refs.current.video) {
          refs.current.video.style.transform = "scale(1)";
        }
  
        if (refs.current.numberInput) {
          refs.current.numberInput.style.display = "block";
        }
        if (refs.current.thumbButton) {
          refs.current.thumbButton.style.display = "block";
        }
      }
    }, [video]);

    const handleDragOver = (event) => {
        event.preventDefault();
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        if (event.target.files?.length > 0) {
            setVideo(event.target.files[0]);
          }
      };


      const handleImageChange = (e) => {
      }
      
  return (
    <Layout>

<TypographyStyle typography={typography}/>


<header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography font-bold">Video Thumbnail Generator</h1>
        <p class="mt-2 text-sm  font-semibold text-gray-500">Impress your viewers with captivating video thumbnails.</p>
        
    </header>
    
<div class="max-w-2xl prose mx-auto mb-10 mt-10 lg:text-lg">
    <div class="relative px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
    {!videoUrl && (

    <div onDragOver={handleDragOver} onDrop={handleDrop}>
    <label
        class="lg:h-64 flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
                Drop a Video file, or
                <span class="text-purple-600 underline"> browse</span>
            </span>
        </span>
        <input type="file" accept="video/*" onChange={(e) => {
              if (e.target.files?.length > 0) {
                setVideo(e.target.files[0]);
              }
            }} class="hidden"/>
    </label>
</div>
)}

<video
  poster={videoThumb}
  style={{
    maxWidth: 600,
    maxHeight: 400,
    transform: "scale(0)",
    transition: "all 0.3s",
    display: videoUrl ? "block" : "none"
  }}
  controls
  id="video"
  ref={(el) => (refs.current.video = el)}
  src={videoUrl}
>
  <source src={video?.url} type={video?.type} />
  Your browser does not support the video tag.
</video>
{videoThumb && (
    
    <button
     className="w-half bg-green-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        const link = document.createElement("a");
        link.href = videoThumb;
        link.download = "selected_image_oksurya.png";
        link.click();
      }}
    >
      Download Selected Thumbnail
    </button>
  )}


        <div
            id="numberWrapper"
            style={{ display: "none" }}
            ref={(el) => (refs.current.numberInput = el)}
          >
            <label className="font-bold" for="numberofthumbnails">
              Enter number of thumbnails to generate:
            </label>
            <input
              type="number"
              className="block w-full p-2 border border-gray-300 rounded-md"
              id="numberofthumbnails"
              onChange={(e) => {
                setThumbNumber(parseInt(e.target.value, 0));
              }}
            />
          </div>


          <div
          style={{ marginTop: 25, display: "none" }}
          id="buttonWrapper"
          ref={(el) => (refs.current.thumbButton = el)}
        >
          <button
          className="w-full bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
            id="generatethumbnails"
            onClick={() => {
              if (video) {
                if (refs.current.loader) {
                  refs.current.loader.style.display = "block";
                }
                generateVideoThumbnails(video, thumbNumber).then((thumbs) => {
                  setThumbnails(thumbs);
                  if (refs.current.loader) {
                    refs.current.loader.style.display = "none";
                  }
                });
              }
            }}
          >
            Generate Thumbnails
          </button>
        </div>


        <div
        id="loader"
        style={{
            display: "none",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            transition: "all 0.3s"
          }}
        ref={(el) => (refs.current.loader = el)}
      >
        <div class="mx-auto max-w-2xl text-center">
        <button disabled type="button" class="w-full">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-purple-800 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button>
</div>


      </div>

      <div
        id="thumbnails"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          transition: "all 0.3s"
        }}
      >
        {thumbnails.map((item) => {
          return (
            <img
              src={item}
              style={{ width: "100%", margin: 10, cursor: "pointer" }}
              alt=""
              onClick={() => {
                setVideoThumb(item);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          );
        })}
      </div>
</div>

<article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">
<h3>How to save thumbnail?</h3>
<p>
For mobile devices, you can save the image by pressing and holding it, and then selecting the "save" option. For PCs, you can right-click on the image and choose "save image".
</p>
<p>
Have you ever desired to fast generate a thumbnail photograph for a video you have uploaded online? Maybe you've got noticed that some movies have an eye-catching thumbnail that entices human beings to click and watch, and you want to ensure your videos have the same effect. Or perhaps you simply want to feature a visual preview on your video before someone hits the play button.
</p><p>
It is in which a Video Thumbnail Generator tool is available in handy. With this device, you can without problems create a custom thumbnail image on your video while not having any layout abilities. Really add your video file, pick out a body from the video that you need to use because the thumbnail, and voila! You have got a visually attractive thumbnail that as it should be represents the content of your video.
</p><p>
This tool is especially useful for content material creators who upload films to structures like YouTube, Vimeo, or Twitch. Through having a visually appealing thumbnail, you can boom the likelihood that human beings will click in your video and watch it all of the manner via. Moreover, if you proportion your movies on social media, a custom thumbnail could make your content stand out from the ocean of different motion pictures and posts.
</p><p>
Typical, a Video Thumbnail Generator tool is a brief and smooth solution for all and sundry who desires to create an appealing thumbnail for his or her video content. It's a simple yet effective way to boom engagement with your motion pictures and cause them to extra visually appealing on your target market.
</p>


</article>
    
    
    </div>







   

    </Layout>
  );
}
export const Head = () => <Seo title="Create Stunning Video Thumbnails with Our Free Tool | Video Thumbnail Generator" description="Quickly and easily generate eye-catching video thumbnails with our free video thumbnail generator tool. Perfect for YouTube, Vimeo, and more."/>

export default App;
