import React, { useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
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

<div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
    <div class="mx-auto max-w-xs lg:col-span-4">
        <div class="grid grid-cols-12 gap-6 text-gray-600">
            <div class="col-span-12">
              <label id="passlength" htmlFor="Password_Length" class="block tb-5 text-sm font-medium text-gray-700">Password Length:</label>
                <div class="mt-1">
                    
                    
 <input type="number" placeholder="Password Length"  class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={length} onChange={(e) => setLength(e.target.value)}/>
                        
                        </div>
            </div>

            <div class="col-span-12">
            
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        <label htmlFor="incnumb" class="block tb-5 text-sm font-medium text-gray-700"> Include Numbers</label>
     <br></br>
        
        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
        <label  htmlFor="incsymb" class="block tb-5 text-sm font-medium text-gray-700"> Include Symbols</label>


        </div>

      
      
            <div class="col-span-12">
                
                
                
 <button type="button" 
 onClick={generatePassword}
 class="w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">
    Generate Password
    </button>
    </div>

    <div class="col-span-12">
    <label  htmlFor="yourpass" class="block tb-5 text-sm font-medium text-gray-700">Your Password: </label>
      <input type="text" class="block w-full rounded-md border-gray-300 font-medium shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={password} readOnly />
       
    </div> 
    </div>
    </div>

    <div className="prose mx-auto mt-12 max-w-2xl">
<p>
    A password generator React JS tool is a web application that is built the use of the React JS framework and is designed to generate complicated and comfortable passwords. React JS is a famous the front-give up framework that is used to build dynamic and responsive internet applications. The password generator React JS tool is one such software this is built the usage of this framework and gives numerous functions to create strong and precise passwords.
    </p><p>
The password generator React JS tool is consumer-friendly and clean to apply. It presents customers with the capacity to customize the password generation process by way of letting them specify the length of the password, the characters for use, and other parameters. The device also can generate passwords based totally on various standards including the use of most effective upper-case or lower-case letters, numbers, or special characters.
</p><p>
One of the key benefits of the use of a password generator React JS device is that it may help users to create stronger and greater secure passwords. These passwords are often extra tough to wager or crack, making them less prone to cyber attacks which includes hacking or phishing. Moreover, the tool can also help users to keep time by automatically generating passwords, in preference to requiring them to provide you with their own passwords manually.
</p><p>
Any other advantage of using a password generator React JS tool is that it is able to be without difficulty customized to match the unique wishes of different users. For example, some customers might also prefer to use passwords which can be shorter or longer, or that include particular characters. The tool can be without problems modified to accommodate these preferences.
</p><p>
In conclusion, a password generator React JS tool is a powerful and beneficial application that could help users to create robust and secure passwords. Through leveraging the capabilities of the React JS framework, these equipment are consumer-friendly, customizable, and notably effective in generating passwords which might be tough to wager or crack.
</p>
</div> 
</div>   
    </Layout>
  );
};
export const Head = () => <Seo title="Password Generator" description="Generate strong and secure passwords with our free password generator tool."/>

export default PasswordGenerator;
