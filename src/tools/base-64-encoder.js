import React, { useState } from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    const encoded = btoa(input);
    setOutput(encoded);
  };

  return (
    <Layout >
          <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Base64 Encode Tool</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">you can convert text into base64.</p>
    </header>

    <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
    <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
    <div class="pb-3 col-span-12">
      <textarea
      className="w-full border pl-5 p-2.5 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to encode"
      />
</div>
      <div class="col-span-12">
                <button type="button" 
                onClick={encode}
                class="w-full bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                   Encode
                   </button>
                   </div>

                   <div class="pt-5 col-span-12">

      <textarea className="w-full border pl-5 p-2.5 rounded-md" value={output} readOnly placeholder="Encoded text" />
      </div>
      
</div>

</div>
<article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">
    <p>
    Because the net has grown, records switch and storage have come to be an increasing number of essential. One undertaking in records switch is the problem of encoding binary information into a format that may be transmitted safely and appropriately across networks. That is where Base64 encoding comes in.
    </p><p>
A Base64 encode tool is a simple but effective utility that may assist customers encode binary information right into a Base64 format that can be appropriately transmitted over the internet. This tool converts binary data right into a text layout that can be transmitted easily over the net, without losing any statistics or corrupting the facts in any manner. The text layout is readable by means of each human and machines, making it an excellent desire for facts transfer.
</p><p>
Using a Base64 encode device is simple and easy. Users absolutely input their binary facts, and the tool converts it into a Base64 layout. The encoded facts can then be transmitted throughout networks, stored in databases or other structures, and without problems decoded again into its original layout as needed. This device can be used for an extensive variety of applications, together with electronic mail attachments, pics, files, and other data that wishes to be transmitted over the internet.
</p><p>
One of the key advantages of using a Base64 encode device is its simplicity. In contrast to different encoding schemes, Base64 encoding uses most effective a restrained set of characters, making it smooth to study and understand. Moreover, Base64 encoding is widely supported through a selection of systems and packages, making it a super choice for facts switch and garage.
</p><p>
Usual, a Base64 encode tool is an effective and versatile utility that can be used by all people who needs to transmit binary information over the internet. Whether you are a web developer, an enterprise owner, or a character person, a Base64 encode tool assist you to effortlessly and adequately transmit your facts, irrespective of in which it desires to go.
</p>
</article>
      
    </Layout>
  );
}
export const Head = () => <Seo title="Base64 Encode Tool - Convert Binary Data to Text Formats"  description="Easily encode binary data into a text format with our Base64 encode tool. Convert and transmit data safely over the internet with no data loss or corruption. Simple and straightforward to use, this tool is ideal for email attachments, images, and other data transfer needs." />

export default App;