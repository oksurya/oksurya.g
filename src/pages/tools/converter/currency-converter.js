import React, { Fragment, useState } from "react";
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      const result = (amount * rate).toFixed(2);
      setConvertedAmount(result);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    convertCurrency();
  };
  const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "KRW", name: "South Korean Won" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "ZAR", name: "South African Rand" },
  ];

  const resetCurrency = () => {
    setIsOpen(false);
    setAmount("0");
  };


  const CloseCurrency = () => {
    setIsOpen(false);
  };

  return (
    <Layout >
 <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={CloseCurrency}>
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
<div class=""><div class="text-center mt-2 text-1xl font-medium">Converted Currency</div>

<div class="text-center mt-2 text-3xl font-medium">{convertedAmount} {toCurrency}</div>
<div class="text-center mt-2 font-light text-sm">

  </div>
<div class="text-center font-normal text-lg">
</div>
<div class="px-6 text-center mt-2 font-light text-sm">
<div className="mt-4">
<button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={CloseCurrency}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={resetCurrency}
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
<header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Currency Converter Tool</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Easily convert any currency with our free online tool.</p>
      </header>

      <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="bg-white">
        <div className="flex flex-col mb-4">
          <label htmlFor="amount" className="text-lg font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="from-currency" className="text-lg font-medium mb-2">
            From
          </label>
          <select
            id="from-currency"
            name="from-currency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >

{countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name} ({country.code})
    </option>
  ))}
            
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="to-currency" className="text-lg font-medium mb-2">
            To
          </label>
          <select
            id="to-currency"
            name="to-currency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name} ({country.code})
    </option>
  ))}

          </select>
        </div>
        <button
        onClick={convertCurrency}
          type="submit"
          className="w-full bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-800"
        >
          Convert
        </button>
      </form>
      
        </div>
        </div>
        <article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">

        <p>
        The currency converter tool is a simple and effective tool that lets in customers to transform any forex into another foreign money quick and effortlessly. It is mainly beneficial for those who journey or store online and need to realize the value of various currencies.
        </p><p>
The device uses updated exchange rates to carry out the foreign money conversion, ensuring that users get the most accurate results possible. Users without a doubt pick the foreign money they want to transform from, the currency they want to convert to, and enter the quantity they want to convert. The tool then calculates the conversion and shows the end result.
</p><p>
Our currency converter tool is designed with consumer experience in mind. It is smooth to apply, speedy, and accurate. It also has a responsive layout, which means that it really works on any device, whether or not it is a laptop computer, a pill, or a cell phone.
</p><p>
In phrases of search engine optimization, the foreign money converter device may be optimized with applicable keywords which include "foreign money converter", "convert foreign money online", and "alternate fees". Moreover, which include the device on a website can enhance it seek engine ratings by way of increasing user engagement and time spent at the web site.
</p><p>
Common, the currency converter device is a treasured resource for everybody who needs to convert currencies fast and effortlessly. With its person-friendly layout and correct alternate charges, it is a have to-have device for tourists, on-line consumers, and everybody else who desires to address a couple of currencies.
</p>
    
    
    
    </article>
  </Layout>
);
}
export const Head = () => <Seo title="Currency Converter - Convert Any Currency Online"  description="Use our free currency converter tool to quickly and easily convert any currency online. Choose from a wide range of currencies and get accurate exchange rates instantly." />

export default CurrencyConverter;