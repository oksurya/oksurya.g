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
    <div>
      <h1>Image to PDF Converter</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={convertToPDF}>Convert to PDF</button>
      {image && <img src={image} alt="Selected Image" />}
    </div>
  );
}

export default ImageToPDFConverter;
