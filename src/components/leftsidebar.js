import * as React from "react"
import { Link } from "gatsby"
import Menu from "./leftsidebarmenu"

import { HiOutlineNewspaper, HiOutlineHashtag, HiOutlineHome ,HiTrendingUp } from "react-icons/hi";



const navigation = [
    { name: 'Home', href: '/', icon: HiOutlineHome, current: true },
    { name: 'Blog', href: '/blog', icon: HiOutlineNewspaper, current: false },
    { name: 'Topics', href: '/topics', icon: HiOutlineHashtag, current: false },
    { name: 'Trending', href: '#', icon: HiTrendingUp, current: false },
  ]
  

const LeftPage = () => {
  return (
<>
    <div class="md:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t-2 border-purple-800">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      
    {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            aria-label={item.name}
            className="focus:text-indigo-700 hover:text-indigo-700 inline-flex flex-col items-center justify-center px-5 group"
          >
            <item.icon
              className="w-7 h-7 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-indigo-700 "
              aria-hidden="true"
            />
            <span className="hidden focus:text-gray-400  hover:text-purple-800 text-gray-600 truncate">{item.name}</span>
          </Link>
        ))}
 
    </div>
</div>


<div className="rounded-lg  hidden lg:block lg:col-span-3 xl:col-span-3">
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <div className="pb-5 pt-5  space-y-1">
      <div>
        
      <Link aria-label="Oksurya Logo" to="/">
          <svg version="1.0" class="h-10 w-full" xmlns="http://www.w3.org/2000/svg"
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
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="focus:text-purple-800 hover:text-purple-800 text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className="focus:text-gray-400  hover:text-purple-800 text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              aria-hidden="true"
            />
            <span className="focus:text-gray-400  hover:text-purple-800 text-gray-600 truncate">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="">
        
        <div className="mt-3 space-y-2" aria-labelledby="Valuable Resources for Your Work">
        <Menu />
        </div>
      </div>
    </nav>
  </div>
  </>
  )
}

export default LeftPage
