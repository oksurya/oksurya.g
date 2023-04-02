import React, { useState } from 'react';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{};:,.<>?';

    let charSet = characters;
    if (includeNumbers) {
      charSet += numbers;
    }
    if (includeSymbols) {
      charSet += symbols;
    }

    for (let i = 0; i < length; i++) {
      result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    setPassword(result);
  };

  return (
    <Layout>

<div class="mx-auto max-w-2xl text-center">
<h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Password Generator</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">
Generate strong and secure passwords with our free password generator tool.
    </p>
</div>

<div class="mx-auto mt-12 lg:max-w-4xl ">
    <div class="mx-auto max-w-xs lg:col-span-4">
        <div class="grid grid-cols-12 gap-6 text-gray-600">
            <div class="col-span-12"><label for="Password_Length" class="block tb-5 text-sm font-medium text-gray-700">Password Length:</label>
                <div class="mt-1">
                    
                    
 <input type="number" placeholder="Password Length"  class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={length} onChange={(e) => setLength(e.target.value)}/>
                        
                        </div>
            </div>

            <div class="col-span-12">
            
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        <label lass="block tb-5 text-sm font-medium text-gray-700"> Include Numbers</label>
     <br></br>
        
        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
        <label lass="block tb-5 text-sm font-medium text-gray-700"> Include Symbols</label>


        </div>

      
      
            <div class="col-span-12">
                
                
                
 <button type="button" 
 onClick={generatePassword}
 class="w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">
    Generate Password
    </button>
    </div>

    <div class="col-span-12">
    <label lass="block tb-5 text-sm font-medium text-gray-700">Your Password: </label>
      <input type="text" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={password} readOnly />
       
    </div> </div>
    </div>
</div>   
    </Layout>
  );
};
export const Head = () => <Seo title="Password Generator" description="Generate strong and secure passwords with our free password generator tool."/>

export default PasswordGenerator;
