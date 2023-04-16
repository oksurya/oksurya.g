import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

function ImageToPDFConverter() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handlePDFDownload = () => {
    const element = document.getElementById("image-container");
    const opt = {
      margin:       0.5,
      filename:     'image.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(URL.createObjectURL(event.dataTransfer.files[0]));
  };

  return (
    <Layout >
         <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Image to PDF Converter</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Turn your images into PDFs effortlessly</p>
    </header>
    <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
        <div 
        className="max-w-xl"  onDragOver={handleDragOver}
      onDrop={handleDrop}>
    <label
        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
                Drop files to Attach, or
                <span class="text-purple-600 underline"> browse</span>
            </span>
        </span>
        <input type="file" accept="image/*" onChange={handleImageUpload} class="hidden"/>
    </label>
</div>
    <div className="flex flex-col items-center space-y-2"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedImage && (
        <div id="image-container" className="text-center p-4 border-2 border-dashed border-gray-300">
          <img src={selectedImage} alt="Selected" className="max-w-full h-auto" />
          <button onClick={handlePDFDownload} className=" bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-800">Download PDF</button>

        </div>

      )}

    </div>
    
    </div></div>

    <article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">

<p>
    The photograph to PDF Converter is a simple and useful tool that permits customers to transform their pics into PDF layout speedy and without problems. With this tool, you may upload any image in famous codecs together with JPG, PNG, or BMP and convert it into a PDF report that you can download for your computer. You do not need to download any software or set up whatever to your pc to apply this tool, making it a convenient alternative for each person who wishes to convert images to PDFs at the cross.
    </p><p>
This tool is best for college kids, experts, and all of us who wishes to create PDF documents from images. It's an incredible manner to proportion photos with others in a greater at ease and professional layout. You can use this device to convert snap shots together with scanned documents, diagrams, charts, and more into PDFs.
</p><p>
    The picture to PDF Converter is rather easy to apply. Truely uploads your photo and click the download button to get your PDF report. The device also allows you to customize the PDF report settings, together with margins and photograph quality, to fit your wishes.
    </p><p>
In phrases of Seo, the image to PDF Converter is a splendid tool for optimizing your internet site for engines like google. The tool is useful for growing PDFs that may be used as downloadable content for your website, that could help boom engagement and drive visitors. The tool can also be optimized for key phrases including "image to PDF converter" and "convert photograph to PDF," making it easier for users to find your website and the tool. Typical, the photo to PDF Converter is a precious tool for each person who wishes to transform pictures to PDFs quickly and effortlessly.
</p>
</article>
    </Layout >
  );
}
export const Head = () => <Seo title="Convert Your Images to PDF Quickly and Easily | Image to PDF Converter"  description="Convert your images to PDF format quickly and easily with our Image to PDF Converter tool. Simply upload your image and download the PDF file. No need to download any software or install anything on your computer." />

export default ImageToPDFConverter;
