import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

function ImageToPDFConverter() {
  const [image, setImage] = useState(null);
  
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  
  const convertToPDF = () => {
    const doc = new jsPDF();
    doc.addImage(image, 'JPEG', 10, 10, 190, 0); // Add the image to the PDF with appropriate dimensions
    doc.save('converted.pdf');
  }
  
  return (
  <Layout>
   <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Image to PDF Converter</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Turn your images into PDFs effortlessly</p>
    </header>
  <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
    <div>
      <h1>Image to PDF Converter</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={convertToPDF}>Convert to PDF</button>
      {image && <img src={image} alt="Selected Image" />}
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
    </Layout>
  );
}

export default ImageToPDFConverter;
