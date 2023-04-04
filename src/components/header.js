/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import React from 'react';
import { Link } from "gatsby"
import SearchPage from './search'
import TopLoadingBar from "react-top-loading-bar"
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MdClose } from "react-icons/md";

import { 
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaAngleDown,FaRegClock,
 } from 'react-icons/fa';
 import { 
  BiSearch,
  BiHomeSmile,
  BiUser,
  BiBadgeCheck,
  BiMenu,
  BiKey,
  BiHeart,
 } from 'react-icons/bi';

 

const solutions = [
  {
    name: 'Age Calculator',
    description: 'Simply enter your birthdate and the tool will calculate your age in years.',
    href: '/tools/age-calculator/',
    icon: FaRegClock,
  },
  {
    name: 'Password Generator',
    description: 'Keep your online accounts safe and secure with a unique password generated just for you.',
    href: '/tools/password-generator/',
    icon: BiKey,
  },
  { name: 'Instagram Embed Tool', description: "Your customers' data will be safe and secure.", href: '/tools/embed-instagram/', icon: FaInstagram },
  { name: 'Love Calculator', description: "Simply enter your name and your partner's name to calculate your love percentage.", href: '/tools/love-calculator/', icon: BiHeart },

]
const callsToAction = [
  { name: 'Instagram', href: 'https://www.instagram.com/jayasurya_ig', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/oksurya', icon: FaFacebookF },
  { name: 'Youtube', href: 'https://www.youtube.com/@jsurya', icon: FaYoutube },

]
const resources = [
  
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: FaInstagram },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {
  const [closesearch, setSlideClose] = useState(false)
  let [dopen, setdopenpen] = useState(false)
  function closeModal() {
    setdopenpen(false)
  }

  function openModal() {
    setdopenpen(true)
  }
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
   

      <Transition appear show={dopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                 
                  <div className="mt-2">

                  <div class=" font-sans w-full flex flex-row justify-center items-center">
  <div class="">
         <div class="text-center mt-2 text-3xl font-medium">Jayasurya Mailsamy</div>
     <div class="text-center mt-2 font-light text-sm">@oksurya</div>
     <div class="text-center font-normal text-lg">Tamil Nadu</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
         Fron end Developer
       </p>
     </div>
     
  </div>
</div>



                  
                  </div>

               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>





      
<div class="md:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t-2 border-indigo-500">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      
        <Link
    aria-label="Home"
    id="homebtn"
    to="/" // add onClick handler
    className="focus:text-indigo-700 hover:text-indigo-700 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
  >
<BiHomeSmile  className="w-7 h-7 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-700"></BiHomeSmile>

  </Link>
 
  <button
  id="searchbtn" 
  aria-label="Search"
    onClick={() => setSlideClose(true)} // add onClick handler
    className="focus:text-indigo-700 hover:text-indigo-700 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
  >
<BiSearch  className="w-7 h-7 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-700"></BiSearch>
  </button>

  <button
  id="authorpanel" 
  aria-label="Author"
          type="button"
          onClick={openModal}
          className="focus:text-indigo-700 hover:text-indigo-700 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
       
       <BiUser className="w-7 h-7 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-700"></BiUser>
   
        </button>


        <Link
            aria-label="Twitter"
            id="twitterbtn"
    to="https://twitter.com/jayasuryatweet" // add onClick handler
    className="focus:text-indigo-700 hover:text-indigo-700 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
  >
<BiBadgeCheck className="w-7 h-7 mb-1 text-gray-400 dark:text-gray-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-700"></BiBadgeCheck>

  </Link>
        
    </div>
</div>
<TopLoadingBar
        color="#6366f1"
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
      />

    <header className="relative z-10 border-b-2 border-indigo-500 bg-indigo-700">
       <Transition.Root show={closesearch} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-hidden" onClose={setSlideClose}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-2xl">
                <div className="h-full flex flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium text-white">Search Website</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setSlideClose(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <MdClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-indigo-300">
                      Trying to locate a specific item? Utilize the search box provided below to find it.
                      </p>
                    </div>
                  </div>
                  <div >
                    {/* Replace with your content */}
                    <div>
                      <SearchPage/>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    <Popover className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAACNCAMAAAAEnRqzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAABPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRttPRtv///824GH3AAAANHRSTlMAyIB01FKcvjhwrEhY0PRU/Mx8TPiSqv1gT3ktNyxz/oHPqSVsr7OXxlCfiaWE0cSoiDYwpCWM5QAAAAFiS0dENd622WsAAAAJb0ZGcwAAACAAAAAvAM+ai5UAAAAJdnBBZwAAAj8AAAE6AFMKrRYAAAKoSURBVHja7d1ZU9NQHMbhuiEuLAquqIA7uCvf/7N50ZkUT48NSSgk7zy/25z8k/SZ3mTSZjY7G9qs6UZ1+81ZpVvVpbdn6h3IkECGBDIkkCGBDAlkSCBDAhkSyIzugMxoA2RGIEMCGRLIkECGBDIkkCGBDAlkSCBDAhlSHfLuZqV7IEdcHfJ+bekDkCMOZEggQwIZEsiQQIYEMiSQIYEMaayQD8/6tLUYsF1dsNNyBq0Dqu0u9npUXfC42b5X3b7fNqCtfZAdB1QDWQQS5DyQRSBBLgUSZOdAFoEEuRRIkJ0DWXSZkBu153+eVJeeg3za63pAFl0mZFvPnje96PUxngtk0VVC7taOBbJbILsOaLsEkCBBLgJZBBJk50CCXApkEUiQnQMJcimQRWOFfLm5uoO1Q1bP4NUlQr5uucQ3EZA7swu3Jsi2MxgM2db/BoAECRIkSJAgQYIECRIkSJDTgjzcaDpazDruNWv9t+jWDjneW3RZz7WCBAny4oEsAglyKZAgOweyCCTIpUCC7BzIomlBbjW9Bflv1w/57v3qPgx1mBbkx+bCP00Msq3BDtOCbB8AEiRIkCBBggQJEiRIkCBBDof8fFLp6Coh905Wd9rP4cvQAf0gvzaH/dYPsn3AWF8EuqYfug4e0A+yrbXda+0SSJBlIEHOAzkgkCDLQIKcB3JAIEGWgQQ5D+SAQI4C8nuv/c53/ZA/mk57DTj82fRrspC+kd0GgAS5IpBFIAcEEmQZSJDzQA4IJMgykCDngRwQyFFA6mob/KeCGkcgQwIZEsiQQIYEMiSQIYEMCWRIIKfX7y6vf9TIOthucqt0yv3pwAdyxIEMCWRIIEMCGRLIkECGBDIkkCGBDAlkSCBDAhkSyJBAhgQyJJAhgQwJZEggQ7ouyL8AEFnaIh5OMgAAAABJRU5ErkJggg=="
              alt=""
            />
          </Link>
        </div>

        

        <div className="-mr-2 -my-2 md:hidden">
        
        
          <Popover.Button 
          id="Menubtn"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <BiMenu className="h-8 w-8" aria-hidden="true" />
          </Popover.Button>
        </div>
        
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
        <Link to="/blog">
            <span className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Blog</span>
          </Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>Tools</span>
                  <FaAngleDown
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {solutions.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                             <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        {callsToAction.map((item) => (
                          <div key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                              <span className="ml-3">{item.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

         

         
        </Popover.Group>


        
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Popover.Button
        id="Searchbtntop"
    onClick={() => setSlideClose(true)} // add onClick handler
    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  >
              <span className="sr-only">Search</span>
            <BiSearch className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
          
        </div>
      </div>
    </div>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <MdClose className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
        </div>
      </Popover.Panel>
    </Transition>
   
  </Popover>

  </header>
</>
  )
}

export default Header
