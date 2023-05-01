import React, { useState } from "react";
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import { TypographyStyle } from 'react-typography'
import typography from '../../../utils/typography'

const Validator = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setIsTouched(true);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setIsTouched(true);
  };

  const validate = () => {
    const isTitleValid = title.trim().length > 0 && title.length <= 60;
    const isDescriptionValid = description.trim().length > 0 && description.length <= 160;
    setIsValid(isTitleValid && isDescriptionValid);
  };

  return (
    <>
    <Layout>
    <TypographyStyle typography={typography}/>


<header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography font-bold">SEO Title Checker Tool</h1>
        <p class="mt-2 text-sm  font-semibold text-gray-500">Elevate Your SEO Efforts with Our Handy Title and Meta Description Analysis Tool.</p>
        
    </header>
    
    <div className="w-full relative px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
      <label htmlFor="title" className="mt-5 font-bold">
        SEO Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
        className={`block w-full p-2 border border-gray-300 rounded-md border py-2 px-3 ${
          isTouched && title.trim().length === 0 ? "border-red-500" : "border-gray-300"
        } ${isTouched && title.length > 60 ? "border-red-500" : ""}`}
      />
      {isTouched && title.trim().length === 0 && (
        <p className="text-sm text-red-500 mt-1">Please enter a value</p>
      )}
      <p className="text-sm text-gray-500 mt-1">{title.length}/60 characters</p>
      <label htmlFor="description" className="font-bold">
        Meta Description
      </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={handleDescriptionChange}
        className={`block w-full p-2 border border-gray-300 rounded-md border py-2 px-3 ${
          isTouched && description.trim().length === 0 ? "border-red-500" : "border-gray-300"
        } ${isTouched && description.length > 160 ? "border-red-500" : ""}`}
      />
      {isTouched && description.trim().length === 0 && (
        <p className="text-sm text-red-500 mt-1">Please enter a value</p>
      )}
      <p className="text-sm text-gray-500 mt-1">{description.length}/160 characters</p>
      <button
        onClick={validate}
        className="w-full bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
      >
        Check
      </button>
      {isTouched && !isValid && (
        <div className="border-2 border-red-500 p-4 mt-4">
          <p className="text-red-500 font-medium">Invalid</p>
        </div>
      )}
      {isTouched && isValid && (
        <div className="border-2 border-green-500 p-4 mt-4">
          <p className="text-green-500 font-medium">Valid</p>
        </div>
      )}
    </div>
    </Layout>
    </>
  );
};
export const Head = () => <Seo title="SEO Title and Meta Description Validator - Check Your Titles and Descriptions Now" description="Ensure your website's SEO success with our SEO title and meta description validator. Check your titles and descriptions now and improve your search engine rankings."/>

export default Validator;
