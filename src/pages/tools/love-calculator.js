import React, { Fragment, useState } from "react";

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Dialog, Transition } from '@headlessui/react'
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
<div class="text-center mt-2 font-light text-sm">
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






<div class="mx-auto max-w-2xl text-center">
<h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Love Calculator</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">
Simply enter your name and your partner's name to calculate your love percentage.
    </p>
</div>
<div class="max-w-2xl prose mx-auto mt-10 lg:text-lg">
    <div class="flex flex-col gap-2">

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
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={resetLoveCalculator}>Reset</button>
        ) : (
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={calculateLove}>Calculate Love</button>
        )}
    </div>
    </div>



    </Layout>
  );
};
export const Head = () => <Seo title="Free Love Calculator Tool: Calculate Your Love Percentage" description="Test your love with our online love calculator tool. Our advanced algorithms will calculate your love percentage and give you insight into your relationship.
"/>

export default LoveCalculator;
