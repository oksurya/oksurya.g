import React, {  useState, useEffect } from 'react';

import TopLoadingBar from "react-top-loading-bar"

import LeftPage from './leftsidebar'
import RMenu from './rightsidebar'

import { Link } from "gatsby"








const Layout = ({children}) => {



  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `https://cse.google.com/cse?cx=222e3e47a9bfb4a40#gsc.tab=0&gsc.q=${searchTerm}&gsc.sort=`;
    }
  };




  const [loadingProgress, setLoadingProgress] = useState(0);


  useEffect(() => {
    // Update the loading progress every 100ms
    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
        }
        const randomIncrement = Math.floor(Math.random() * 70) + 1; // Simulating progress using random increments
        return prevProgress + randomIncrement;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);




  
  return (
    <>
    <TopLoadingBar
        color="#800099"
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
      />
    <div className="min-h-full">
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">

      
        <div className="py-3">
        <header class="lg:hidden flex items-center justify-center h-16 border-purple-800 border-b-2 bg-white-200 text-white">
  <div class="flex p-2 items-center">
  <Link aria-label="Oksurya Logo" to="/">
          
          
  <svg version="1.0" class="h-10 mr-3" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 456.000000 141.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)"
fill="#800099" stroke="none">
<path d="M6 1333 c-3 -42 -6 -285 -6 -540 l0 -463 330 0 330 0 0 540 0 540
-324 0 -323 0 -7 -77z m424 -463 l0 -310 -100 0 -100 0 0 310 0 310 100 0 100
0 0 -310z"/>
<path d="M760 870 l0 -540 115 0 115 0 0 215 0 215 100 0 100 0 0 -215 0 -215
115 0 115 0 0 220 0 220 -55 0 -55 0 0 100 0 100 55 0 55 0 0 220 0 220 -115
0 -115 0 0 -210 0 -210 -100 0 -100 0 0 210 0 210 -115 0 -115 0 0 -540z"/>
<path d="M1520 870 l0 -220 160 0 160 0 0 -45 0 -45 -160 0 -160 0 0 -115 0
-115 275 0 275 0 0 220 0 220 -160 0 -160 0 0 45 0 45 160 0 160 0 0 115 0
115 -275 0 -275 0 0 -220z"/>
<path d="M2170 710 l0 -380 275 0 275 0 0 380 0 380 -115 0 -115 0 0 -265 0
-265 -45 0 -45 0 0 265 0 265 -115 0 -115 0 0 -380z"/>
<path d="M2820 710 l0 -380 115 0 115 0 0 265 0 265 105 0 105 0 0 115 0 115
-220 0 -220 0 0 -380z"/>
<path d="M3360 710 l0 -380 160 0 160 0 0 -50 0 -50 -77 0 c-43 0 -115 -3
-160 -7 l-83 -6 0 -108 0 -109 275 0 275 0 0 545 0 545 -115 0 -115 0 0 -265
0 -265 -45 0 -45 0 0 265 0 265 -115 0 -115 0 0 -380z"/>
<path d="M4010 975 l0 -115 160 0 160 0 0 -45 0 -45 -160 0 -160 0 0 -220 0
-220 275 0 275 0 0 380 0 380 -275 0 -275 0 0 -115z"/>
</g>
</svg></Link>
  </div>
</header>
<div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12">



          <LeftPage/>
      
          <main className="lg:pb-5 rounded-lg shadow lg:col-span-9 xl:col-span-6">
          <form className="my-5 mb-10 flex max-w-xl items-center px-6" onSubmit={handleSubmit}>
        <input
        className="pl-5 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your search query here.."
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    <button type="submit" class="mt-0 ml-3 inline-flex w-auto items-center justify-center rounded-md border border-transparent searchbtn px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0">Search</button>
      </form>


{children}
</main>
<RMenu/>
    </div>
    </div>



<footer class="bg-white text-center lg:text-left">
<div className="hover:text-puple-700 text-center w-full space-x-4 pt-5">

<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/p/privacy">Privacy</Link>
<Link to="/p/dmca">DMCA</Link>


</div>
  <div class="p-4 text-center black">© 2023 Copyright - <a class="black" href="https://twitter.com/jayasuryatweet">Designed by Jayasurya Mailsamy</a>
  </div>
  </footer>
    </div>
    </div>
    </>
  )
}

export default Layout
