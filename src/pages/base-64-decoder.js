import React, { useState } from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const decode = () => {
    const decoded = atob(input);
    setOutput(decoded);
  };

  return (
    <Layout >
      <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Base64 Decoder Tool</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Convert Base64-encoded text back to its original binary format</p>
      </header>

      <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
          <div class="pb-3 col-span-12">
            <textarea
              className="w-full border pl-5 p-2.5 rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Base64-encoded text to decode"
            />
          </div>
          <div class="col-span-12">
            <button
              type="button"
              onClick={decode}
              class="w-full bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
            >
              Decode
            </button>
          </div>
          <div class="pt-5 col-span-12">
            <textarea
              className="w-full border pl-5 p-2.5 rounded-md"
              value={output}
              readOnly
              placeholder="Decoded text"
            />
          </div>
        </div>
      </div>
      <article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">
    <p>
    Convert encoded Base64 text into binary data using our simple and easy-to-use Base64 Decoder Tool. Simply input the encoded text and convert it back into its original binary data format for safe and accurate data transfer. Ideal for web developers, business owners, and individual users who need to transmit data over the internet.
    </p><p>
With the increasing need for secure data transfer and storage, Base64 encoding has become an essential tool for web developers and businesses alike. However, in order to decode the encoded data and convert it back into its original binary format, you need a reliable and easy-to-use Base64 decoder tool.
</p><p>
Our Base64 decoder tool is designed to make the decoding process simple and straightforward. With just a few clicks, you can input your encoded Base64 text and convert it back into its original binary format. This makes it easy to transmit data safely and accurately over the internet, without any data loss or corruption.
</p><p>
Our Base64 decoder tool is also ideal for individual users who need to transmit data over the internet. Whether you're sending emails, images, or documents, our tool makes it easy to convert your encoded text back into its original format for safe and accurate data transfer.
</p><p>
Overall, our Base64 decoder tool is a simple and essential utility for anyone who needs to decode encoded text into its original binary format. Whether you're a web developer, a business owner, or an individual user, our tool makes it easy to convert and transmit data safely and accurately over the internet.
</p>
    </article>
    </Layout>
  );
}
export const Head = () => <Seo title="Base64 Decoder Tool - Convert Text into Binary Data"  description="Convert encoded Base64 text into binary data using our simple and easy-to-use Base64 Decoder Tool." />

export default App;
