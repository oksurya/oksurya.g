import React, { useState, useEffect } from 'react';
import TopLoadingBar from "react-top-loading-bar"

import LeftPage from './leftsidebar'
import RightPage from './rightsidebar'
import { Link } from "gatsby"







const Layout = ({children}) => {




  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const API_KEY = 'AIzaSyALQVioHZu6i7xeo_LKOG5nN7jFcQF_5d8';
    const cx = '222e3e47a9bfb4a40';
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}%20site:techviral.net&cx=${cx}&key=${API_KEY}`;

    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setResults(data.items);
        }
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setError('Error fetching search results');
      });
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="py-5">
        <header class="lg:hidden flex items-center justify-center h-16 border-b bg-white-200 text-white">
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
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">



          <LeftPage/>
      
<main className="lg:col-span-9 xl:col-span-6">
<form className="my-5 flex max-w-xl items-center px-6" onSubmit={handleSearch}>
        <input
        className="pl-5 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your search query here.."
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={handleInputChange}
        />
    <button type="submit" class="mt-0 ml-3 inline-flex w-auto items-center justify-center rounded-md border border-transparent searchbtn px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0">Search</button>
      </form>

{error && <p>{error}</p>}


      {results.map((result) => (
          <div key={result.link}>
          <div class="border-b group relative flex items-center px-6 py-4">
          <a rel="nofollow" href={result.link}>                <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                  <div class="relative flex min-w-0 flex-1 items-center">
                      <div class="truncat">
                          <p class="truncatex text-sm font-medium text-gray-800">{result.title}</p>
                          <p class="truncatex text-sm text-gray-500">{result.snippet}</p>
                      </div>
                  </div>
              </a>
          </div>
      </div>
      ))}


{children}
</main>
<RightPage/>
    </div>
    </div>



<footer class="bg-white text-center lg:text-left">
  <div class="p-4 text-center black">© 2023 Copyright - <a class="black" href="https://twitter.com/jayasuryatweet">Designed by Jayasurya Mailsamy</a>
  </div>
  </footer>
    </div>
    </div>
    </>
  )
}

export default Layout
