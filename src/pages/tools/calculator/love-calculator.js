import React, { Fragment, useState } from "react";

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Dialog, Transition } from '@headlessui/react'
import { TypographyStyle } from 'react-typography'
import typography from '../../../utils/typography'

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [lovePercentage, setLovePercentage] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const calculateLove = () => {
    const loveScore = Math.floor(Math.random() * 101);
    setLovePercentage(loveScore);
    setShowResetButton(true);
    setIsOpen(true);
  };

  const resetLoveCalculator = () => {
    setName1("");
    setName2("");
    setLovePercentage(0);
    setShowResetButton(false);
    setIsOpen(false);
  };

  return (

<Layout>

<TypographyStyle typography={typography}/>



      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={resetLoveCalculator}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
      <div className="mt-2">

<div class=" font-sans w-full flex flex-row justify-center items-center">
<div class="">
<div class="text-center mt-2 text-3xl font-medium">{lovePercentage}%</div>
<div class="text-center mt-2 font-light text-base">
{lovePercentage > 0 && (

<div>
{lovePercentage >= 80
? "Wow, you two are meant to be together!"
: lovePercentage >= 50
? "Not bad, there's potential for something great!"
: "Hmm, maybe you should just be friends."}
</div>

      )}
  </div>
<div class="text-center font-normal text-lg">
</div>
<div class="px-6 text-center mt-2 font-light text-sm">
<div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={resetLoveCalculator}
                    >
                      Reset
                    </button>
                  </div>
</div>

</div>
</div>




</div>




    



                  
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      <div class="pb-10 container mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6">
    <article className=" prose prose-indigo text-gray-500 mx-auto">

<header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography font-bold">Love Calculator</h1>
        <p class="mt-2 text-sm  font-semibold text-gray-500">Simply enter your name and your partner's name to calculate your love percentage</p>
        
    </header>

    
      <div className="pt-5">  
      <div class="relative flex flex-col gap-2">
      <label class="font-bold" htmlFor="name1">Enter your Name:</label>
    <input
        class="p-2 border border-gray-300 rounded-md"
        required=""
            type="text"
            id="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
    <label class="font-bold" htmlFor="name2">Enter your Crush Name:</label>
    <input
        class="p-2 border border-gray-300 rounded-md"
        required=""
            type="text"
            id="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />

{showResetButton ? (
          <button class="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={resetLoveCalculator}>Reset</button>
        ) : (
          <button class="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={calculateLove}>Calculate Love</button>
        )}
      </div>


</div>
<p>&nbsp;A love calculator tool is a web program that aims to are expecting the compatibility among two individuals based totally on their names or birthdates. This device has won monstrous popularity over the years, mainly amongst folks that are searching out their soulmates. The idea in the back of this tool is that certain numbers or combinations of letters constitute distinctive aspects of character or character, and therefore, by using calculating the numerical cost of these elements, the device can provide an estimate of the ability for a a hit courting.</p><p>There are exceptional kinds of love calculators to be had on-line, each with its specific method to calculating compatibility. Some calculators simply use the letters in the name of the people, whilst others aspect in the birthdate's and astrological signs and symptoms of the partners. Additionally, a few calculators also don't forget the numerical price of the letters in the name, that is derived from the alphabetical order of the letters. Those calculations are then used to generate a percentage score that represents the level of compatibility among the two individuals.</p><p>While love calculators can be enjoyable and amusing to apply, they should be eager about a grain of salt. The accuracy of those tools is highly arguable, as they're based totally on subjective and unscientific elements. Moreover, there are many factors that determine the achievement of a relationship, such as shared interests, values, and lifestyles goals, which are not accounted for in these calculations.</p><p>In end, a love calculator tool can be a a laugh manner to bypass the time, however it need to not be taken seriously as a predictor of relationship success. The nice manner to discover a like minded companion is thru learning them individually, and building a meaningful connection primarily based on shared studies, values, and hobbies.</p>

</article>
    
    
       
    </div>
    
  </div>




    </Layout>
  );
};
export const Head = () => <Seo title="Free Love Calculator Tool: Calculate Your Love Percentage" description="Test your love with our online love calculator tool. Our advanced algorithms will calculate your love percentage and give you insight into your relationship.
"/>

export default LoveCalculator;
