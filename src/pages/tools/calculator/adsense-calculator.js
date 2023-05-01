import React, { Fragment,useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Dialog, Transition } from '@headlessui/react'

import { TypographyStyle } from 'react-typography'
import typography from '../../../utils/typography'

const AdSenseCalculator = () => {
  const [impressions, setImpressions] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [ctr, setCtr] = useState(0);
  const [cpc, setCpc] = useState(0);
  const [revenueDaily, setRevenueDaily] = useState(0);
  const [revenueMonthly, setRevenueMonthly] = useState(0);
  const [revenueYearly, setRevenueYearly] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const calculateRevenue = () => {
    setIsOpen(true);
    const calculatedRevenueDaily = (impressions / 1000) * ctr * cpc;
    setRevenueDaily(calculatedRevenueDaily);

    const calculatedRevenueMonthly = calculatedRevenueDaily * 30;
    setRevenueMonthly(calculatedRevenueMonthly);

    const calculatedRevenueYearly = calculatedRevenueDaily * 365;
    setRevenueYearly(calculatedRevenueYearly);
  };
  const resetAdsense = () => {
    setIsOpen(false);
  };

  return (
    <Layout>

    <TypographyStyle typography={typography}/>

    <div class="pb-10 container mx-auto">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
    <article className=" prose prose-indigo text-gray-500 mx-auto">
    <header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography font-bold">Adsense Calculator</h1>
        <p class="mt-2 text-sm  font-semibold text-gray-500">Maximize your Adsense profits with our handy calculator tool.</p>
    </header>
    
    <div className="pt-5">
   
    <div class="relative flex flex-col gap-2">
    <label htmlFor="impressions" className="font-bold">Impressions:</label>
        <input
          type="number"
          id="impressions"
          value={impressions}
          onChange={(e) => setImpressions(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />

<label htmlFor="clicks" className="font-bold">Clicks:</label>
        <input
          type="number"
          id="clicks"
          value={clicks}
          onChange={(e) => setClicks(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />

<label htmlFor="ctr" className="font-bold">CTR:</label>
        <input
          type="number"
          id="ctr"
          value={ctr}
          onChange={(e) => setCtr(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />

<label htmlFor="cpc" className="font-bold">CPC:</label>
        <input
          type="number"
          id="cpc"
          value={cpc}
          onChange={(e) => setCpc(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
         <button onClick={calculateRevenue} className="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Calculate</button>
     
    </div>
    </div>
<h2>How to Use an Adsense Calculator to Maximize Your Earnings</h2>
<p>


Hey there! Have you heard approximately Adsense Calculator? It's a device that will let you calculate your capability earnings from Google Adsense. You might be questioning what Adsense is, proper? Properly, it's a program that permits website proprietors to earn money by using displaying commercials on their website online. And with the Adsense Calculator, you could estimate how a great deal you may earn based in your internet site's site visitors and advert performance.
</p><p>
The best part is, the Adsense Calculator is exquisite clean to use! All you have to do is enter a few fundamental numbers like your day by day pageviews, click-via charge, and cost in step with click on, and the calculator does the relaxation. It'll give you an estimate of your capacity income in keeping with day, week, month, or even 12 months.
</p><p>

The usage of the Adsense Calculator can be truly useful in case you're considering monetizing your internet site with Google Adsense. It can come up with a higher concept of what to expect in phrases of earnings, and help you intend your advert strategy as a consequence. Plus, it is completely unfastened to apply, so there is no danger in giving it a strive.
</p><p>

General, if you're interested by earning money out of your internet site with Google Adsense, the Adsense Calculator is clearly well worth checking out. It is a simple yet effective device that can help you maximize your profits and attain your monetization dreams.


</p>
<p>The use of an Adsense calculator is an effective manner to estimate your ability income from Google Adsense. By way of inputting your internet site's facts, you could get a better know-how of the way to optimize your website for maximum sales. Recollect to test with extraordinary strategies to growth your internet site visitors, CTR, CPC, and conversion fee. With the right approach, you could maximize your Adsense profits and generate greater revenue from your website.</p>
    </article>
    </div>
    </div>


    <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={resetAdsense}>
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
<div class="text-center mt-2 text-base font-medium">

<div className="mt-4">
        <p >Revenue by Day:<br></br>${revenueDaily.toFixed(2)}</p>
        <p>Revenue by Month:<br></br>${revenueMonthly.toFixed(2)}</p>
        <p>Revenue by Year:<br></br> ${revenueYearly.toFixed(2)}</p>
      </div>
</div>
<div class="text-center font-normal text-lg">
</div>
<div class="px-6 text-center mt-2 font-light text-sm">
<div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={resetAdsense}
                    >
                      Close
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


    </Layout>
  );
};
export const Head = () => <Seo title="Adsense Calculator - Estimate Your Adsense Earnings Today" description="Use our Adsense calculator to get an estimate of your potential earnings from Google Adsense. Simply enter your website traffic and other relevant details to get started."/>

export default AdSenseCalculator
