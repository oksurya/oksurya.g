import * as React from "react"
import { Link } from "gatsby"
import Menu from "./leftsidebarmenu"
import { MdOutlineSettingsEthernet } from "react-icons/md";

import { HiOutlineNewspaper, HiOutlineHashtag, HiOutlineHome ,HiTrendingUp } from "react-icons/hi";



const navigation = [
    { name: 'Home', href: '/', icon: HiOutlineHome, current: true },
    { name: 'Blog', href: '/blog', icon: HiOutlineNewspaper, current: false },
    { name: 'Topics', href: '/topics', icon: HiOutlineHashtag, current: false },
    { name: 'Tools', href: '/tools', icon: MdOutlineSettingsEthernet, current: false },
  ]
  

const LeftPage = () => {
  return (
<>

<div class="backdrop-filter backdrop-blur-lg bg-opacity-30 md:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t-2 border-purple-800">
    <div class="grid h-full max-w-full grid-cols-4 mx-auto font-medium">


    
		
	


    {navigation.map((item) => (
        <Link 
        key={item.name}
        to={item.href}
        aria-label={item.name}
        className="inline-flex focus:outline-none focus:text-purple-800 flex-col items-center justify-center px-5 hover:bg-gray-50 ">
           
           <item.icon
              className="w-7 h-7 mb-1 focus:text-purple-800 text-gray-500  hover:text-purple-800 "
              aria-hidden="true"
            />
           
          
        </Link>

))}
        
    </div>
</div>



<div className="rounded-lg  hidden lg:block lg:col-span-3 xl:col-span-3">


    <nav aria-label="Sidebar" className="sticky top-0 divide-y divide-gray-300">


      
      <div className="pb-5 pt-5  space-y-1">
    
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
