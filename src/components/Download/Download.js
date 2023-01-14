import React from 'react';
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import "./Download.css"

const Download = () => {
    return (
        <div className=''>
            <div className='p-10 div-style'>
                
<nav className=" border-gray-200 nav-align px-2 sm:px-4 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto mt-16">
    <a href=" " className="flex justify-around items-center mb-5 ">
        <span style={{color:"#102048",fontWeight:"700"}} className="heading-size  self-center text-4xl whitespace-nowrap ">Attendance</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex menu-align items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <button style={{backgroundColor:"#1E2772"}} className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-4">Download Report </button>
        </li>
        <li>
          <a style={{color:"#1E2772"}} href=" " className="block text-4xl py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <IoMdSettings></IoMdSettings>
          </a>
        </li>
        
        
      
      </ul>
    </div>
  </div>
</nav>

            </div>

<div className='lg:grid lg:grid-cols-4 lg:px-36 lg:pb-16' id="accordion-collapse" data-accordion="collapse">
<h2 className='mt-5 lg:ml-4 bg-white ' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Jan 03,2023</span>
      <SlCalender></SlCalender>
    </button>
  </h2>

  <h2 className='mt-5 lg:ml-4 bg-white' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center bg-white justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Department</span>
      
    </button>
  </h2>

  <h2 className='mt-5 lg:ml-4 bg-white ' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Attendance</span>
      <MdKeyboardArrowDown></MdKeyboardArrowDown>
    </button>
  </h2>
  <h2 className='mt-5 lg:ml-4 bg-white ' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Present</span>
      <MdKeyboardArrowDown></MdKeyboardArrowDown>
    </button>
  </h2>
  <h2 className='mt-5 lg:ml-4 bg-white' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Check in</span>
      
    </button>
  </h2>
  <h2 className='mt-5 lg:ml-4 bg-white' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Locations</span>
      
    </button>
  </h2>
  <h2 className='mt-5 lg:ml-4 bg-white' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Designation</span>
      <MdKeyboardArrowDown></MdKeyboardArrowDown>
    </button>
  </h2>
  <h2 className='mt-5 lg:ml-4 bg-white' id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 bg-white focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Departments</span>
      <MdKeyboardArrowDown></MdKeyboardArrowDown>
    </button>
  </h2>
 
</div>

        </div>
    );
};

export default Download;