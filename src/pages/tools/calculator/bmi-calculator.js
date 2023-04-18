import React, { Fragment,useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Dialog, Transition } from '@headlessui/react'

function BMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmi, setBMI] = useState('');
    const [idealBMI, setIdealBMI] = useState('');
    const [bmiPercentage, setBMIPercentage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const calculateBMI = () => {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
      setIsOpen(true);
    }
  
    const calculateIdealBMI = () => {
      // Calculate the ideal BMI based on the user's age and gender
      const idealBMIValue = gender === 'male' ?
        26.4 - (0.06 * age) :
        25.0 - (0.02 * age);
      setIdealBMI(idealBMIValue.toFixed(2));
  
      // Calculate the percentage of the ideal BMI
      const bmiPercentageValue = (bmi / idealBMIValue) * 100;
      setBMIPercentage(bmiPercentageValue.toFixed(2));
    }


    const resetBMI = () => {
        setIsOpen(false);
      };

  return (
    <Layout>




<Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={resetBMI}>
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
<div class="text-center mt-2 text-2xl font-medium">{bmi} kg/m<sup>2</sup></div>
<div class="text-center mt-2 font-light text-base">
{bmi && (
  <div class="">
    <p class="mb-2">
      {bmi < 18.5 ? 'You are underweight.' :
      bmi >= 18.5 && bmi < 25 ? <span class="text-green-600">You are healthy.</span> :
      bmi >= 25 && bmi < 30 ? <span class="text-rose-400">You are overweight.</span> :
      <span class="text-red-600">You are obese.</span>}</p>
    <p class="text-base">Your BMI is {bmiPercentage}% of the ideal BMI for your age and gender.</p>
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
                      onClick={resetBMI}
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




<div class="mx-auto max-w-2xl text-center">
<h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">BMI Calculator</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">
Your Weight with Our Personalized BMI Calculator with Age and Gender
</p>
</div>
    
<div class="max-w-2xl prose mx-auto mt-10 lg:text-lg">
    <div class="relative px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
  

  <label class="font-bold">
    Weight (kg):
    </label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)} class="p-2 border border-gray-300 rounded-md" />
 
  <label class="font-bold">
    Height (cm):  </label>
    <input type="number" value={height} onChange={e => setHeight(e.target.value)} class="p-2 border border-gray-300 rounded-md" />

  <label class="font-bold">
    Age:  </label>
    <input type="number" value={age} onChange={e => setAge(e.target.value)} class="p-2 border border-gray-300 rounded-md" />

  <label class="font-bold">
    Gender:  </label>
    <select value={gender} onChange={e => setGender(e.target.value)} class="p-2 border border-gray-300 rounded-md">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

  <button onClick={() => {
    calculateBMI();
    calculateIdealBMI();
  }} class="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Calculate BMI</button>
  


</div>

<article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">

<p>
The body Mass Index (BMI) calculator is a tool this is widely used to decide whether or not a person's weight falls inside a healthy range relative to their peak. The BMI formula is simple, requiring most effective the load and height of the character to calculate their BMI price. The BMI is then categorised into categories ranging from underweight to obese, with the goal being to hold a wholesome weight in the regular variety.
</p><p>
But this calculator takes it a step further by incorporating age and gender into the calculation. Studies has proven that BMI values can vary primarily based on age and gender, that can affect the accuracy of the outcomes. By accounting for these variables, this calculator presents a greater personalized and correct estimation of the consumer's BMI.
</p><p>
The calculator additionally consists of the appropriate BMI price based on the person's age and gender, which serves as a beneficial benchmark to purpose for. The proportion of the user's BMI relative to an appropriate BMI is also calculated, providing an additional metric for the person to music their progress closer to a healthful weight.
</p><p>
This calculator is a valuable device for folks who are seeking to screen and hold their weight inside a healthful range. It's far essential to note, however, that BMI isn't always a super indicator of health, because it does not recall elements together with muscle mass or frame composition. Consequently, it's far constantly endorsed to talk over with a healthcare professional for a more complete evaluation of one's standard health and wellness.
</p><p>
Normal, the BMI calculator with age and gender is a simple but powerful tool which can assist people make knowledgeable choices about their fitness and wellbeing. By way of imparting personalized and correct outcomes, this calculator can empower customers to take fee of their health and make wonderful life-style changes closer to a more fit destiny.
</p>

</article>
    
    
    </div>







   

    </Layout>
  );
}
export const Head = () => <Seo title="BMI Calculator with Age and Gender | Calculate Your BMI in KG/M2 and Percentage" description=" BMI Calculator with Age and Gender | Calculate Your BMI in KG/M2 and Percentage"/>

export default BMI;
