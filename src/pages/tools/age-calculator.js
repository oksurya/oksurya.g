import React, { useState } from 'react';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
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
    <div class="flex flex-col gap-2">
  <label class="font-bold" htmlFor="birthDate">Enter your birthdate:</label>
  <input
    class="p-2 border border-gray-300 rounded-md"
    type="date"
    id="birthDate"
    value={birthDate}
    onChange={(e) => setBirthDate(e.target.value)}
  />
  <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={calculateAge}>Calculate Age</button>
  {age !== null && <p class="font-bold">You are {age} years old.</p>}
</div>
    </div>







   

    </Layout>
  );
}
export const Head = () => <Seo title="Age Calculator" />

export default AgeCalculator;
