import React, { useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  function calculateAge() {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageInMilliseconds = today - birth;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000);
    setAge(ageInYears);
  }

  return (
    <Layout>


<div class="mx-auto max-w-2xl text-center">
<h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Age Calculator</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">
Calculate your age with our easy-to-use age calculator tool
    </p>
</div>
    
<div class="max-w-2xl prose mx-auto mt-10 lg:text-lg">
    <div class="relative px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
  <label class="font-bold" htmlFor="birthDate">Enter your birthdate:</label>
  <input
    class="p-2 border border-gray-300 rounded-md"
    type="date"
    id="birthDate"
    value={birthDate}
    onChange={(e) => setBirthDate(e.target.value)}
  />
  <button class="bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={calculateAge}>Calculate Age</button>
  {age !== null && <p class="font-bold">You are {age} years old.</p>}
</div>

<article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">

<p>
An age calculator device is a simple yet effective online tool that permits users to speedy and without difficulty calculate the age of someone based totally on their date of delivery. This device is broadly used by humans from all walks of existence, including educators, healthcare professionals, HR managers, and individuals looking to song their personal age or that in their cherished ones.
</p><p>
Age calculator gear are generally net-based applications that require customers to enter the date of birth of the person they are calculating the age for. A few age calculators also require customers to go into the modern-day date or the date they need to calculate the age for. Once the vital facts has been entered, the device will quick calculate and show the age of the person in years, months, days, or even hours or mins.
</p><p>
The blessings of the usage of an age calculator device are numerous. For educators, an age calculator can assist them correctly determine a student's age, which can be crucial for placing them in an appropriate grade stage or application. Healthcare professionals can use an age calculator to correctly calculate a affected person's age and song their growth and development through the years. HR managers can use an age calculator to decide the age of process applicants and make sure they meet the age requirements for certain positions.
</p><p>
People also can gain from using an age calculator tool. It can be a fun and exciting way to music their personal age or that in their cherished ones. It may also be useful for making plans milestone birthday celebrations or determining eligibility for sure applications or advantages.
</p><p>
Universal, an age calculator tool is a easy yet crucial on line tool that gives correct and beneficial records to a wide variety of customers. It is straightforward to apply, broadly available, and might save customers effort and time in calculating age manually.
</p>

</article>
    
    
    </div>







   

    </Layout>
  );
}
export const Head = () => <Seo title="Age Calculator" description="Calculate your age with our easy-to-use age calculator tool"/>

export default AgeCalculator;
