import React, { useState } from "react";
import  Layout from "../components/layout";
import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'
import Seo from "../components/seo"

const IFSCDetailsViewer = () => {
  const [ifsc, setIfsc] = useState("");
  const [details, setDetails] = useState(null);

  const handleChange = (e) => {
    setIfsc(e.target.value);
  };

  const handleFetch = () => {
    fetch(`https://ifsc.razorpay.com/${ifsc}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
        <TypographyStyle typography={typography}/>
        <TypographyStyle typography={typography}/>
<div className="pb-10 container mx-auto">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
  <article className=" prose prose-indigo text-gray-500 mx-auto">


  <header className="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" className="no-typography font-bold">IFSC Details Viewer</h1>
        <p className="mt-2 text-sm  font-semibold text-gray-500">Discover the complete details of any bank branch with IFSC Details Viewer</p>
        
    </header>

    <div className="pt-5">  
      <div class="relative flex flex-col gap-2">
      <input
      className="p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Enter IFSC code"
        value={ifsc}
        onChange={handleChange}
      />
      <button className="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={handleFetch}>Fetch</button>
      </div>
    </div>
  </article>


    </div>
    </div>




    <div>
      
      {details && (
  <div>
    <ul class="ml-0 p-6 bg-gray-100 rounded-lg shadow-lg">
  <li class="mb-2">Bank Name: <span class="font-bold">{details.BANK}</span></li>
  <li class="mb-2">Branch Name: <span class="font-bold">{details.BRANCH}</span></li>
  <li class="mb-2">City: <span class="font-bold">{details.CITY}</span></li>
  <li class="mb-2">State: <span class="font-bold">{details.STATE}</span></li>
  <li class="mb-2">District: <span class="font-bold">{details.DISTRICT}</span></li>
  <li class="mb-2">Address: <span class="font-bold">{details.ADDRESS}</span></li>
  <li class="mb-2">MICR: <span class="font-bold">{details.MICR}</span></li>
  <li class="mb-2">UPI: <span class="font-bold">{details.UPI ? "Yes" : "No"}</span></li>
  <li class="mb-2">RTGS: <span class="font-bold">{details.RTGS ? "Yes" : "No"}</span></li>
  <li class="mb-2">NEFT: <span class="font-bold">{details.NEFT ? "Yes" : "No"}</span></li>
  <li class="mb-2">IMPS: <span class="font-bold">{details.IMPS ? "Yes" : "No"}</span></li>
  <li class="mb-2">SWIFT: <span class="font-bold">{details.SWIFT || "N/A"}</span></li>
  <li class="mb-2">IFSC: <span class="font-bold">{details.IFSC}</span></li>
</ul>

  </div>
)}
    </div>
    </Layout>
  );
};
export const Head = () => <Seo title="IFSC Details Viewer - Find Bank Branch Details by IFSC Code" description="Lookup bank branch details by IFSC code with IFSC Details Viewer. Get information on bank name, branch, address, MICR, NEFT, RTGS, IMPS, and more."/>

export default IFSCDetailsViewer;
