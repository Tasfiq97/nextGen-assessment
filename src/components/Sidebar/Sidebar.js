import React from 'react';
import "./Sidebar.css"
import logo from "./Executive-Dashboard-Logo-768x768.png"
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
const Sidebar = () => {
    return (
      
<aside className="lg:w-1/4 " aria-label="Sidebar">
   <div className="px-3 py-4 overflow-y-auto color heightClass text-justify  ">
      <ul className="space-y-2  lg:text-center ">
         <li className=' lg:ml-32   w-32 text-center'>
            <img src={logo} alt="" />
         </li>
         <li className='text-white'>
            <Link to="/" className="flex align-sidebar justify-center items-center py-2 text-lg flex-3 text-white rounded-md dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 focus:outline-none focus:bg-gray-400" >
                <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className="ml-3 text-lg">Dashboard</span>
            </Link>
         </li>
         <li className='text-white'>
            <Link to="/attendance" className="flex align-sidebar justify-center items-center py-2 text-lg flex-3  text-white rounded-md dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 focus:outline-none focus:bg-gray-400" >
                <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className="ml-3 text-lg">Attendance</span>
            </Link>
         </li>
         <li>
            <Link className="flex align-sidebar justify-center  items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
            <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className=" ml-4 text-lg whitespace-nowrap focus:outline-none focus:bg-gray-400">Employees</span>
              
            </Link>
         </li>
         <li className='mr-10'>
            <a href=" " className="flex align-sidebar justify-center  items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
              <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className=" ml-3 text-lg whitespace-nowrap">Leaves</span>
               
            </a>
         </li>
         <li className='mr-6'>
            <a href=" " className="flex align-sidebar justify-center  items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
            <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className=" ml-3 text-lg whitespace-nowrap">Expenses</span>
            </a>
         </li>
         <li  className='mr-12'>
            <a href=" " className="flex align-sidebar justify-center  items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
            <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className=" ml-3 text-lg whitespace-nowrap">Notice</span>
            </a>
         </li>
         <li className='ml-4  sidebar-align'>
            <a href=" " className="flex align-sidebar justify-center   items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
            <BsFillCalendarRangeFill></BsFillCalendarRangeFill>
               <span className=" ml-3 text-lg whitespace-nowrap">Departments</span>
            </a>
         </li>
         <li className='mr-16 sidebar-align'>
         
            <a href=" " className="flex align-sidebar justify-center  items-center p-2 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
            <svg sidebar-toggle-item className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <IoMdSettings className='text-3xl'></IoMdSettings>
               <span className=" ml-3 text-lg whitespace-nowrap">Settings</span>
    
            </a>
            <ul className=' text-left lg:ml-32 setting-align  ' style={{listStyleType:"disc"}}>
                <li className='text-base text-white ml-2 mt-4'>Approval</li>
                 <li className='text-base text-white ml-2 mt-4'>Leave</li>
                 <li className='text-base text-white ml-2 mt-4'>Office Setting</li>
                 <li className='text-base text-white ml-2 mt-4 mb-20'>My Subscription</li>
                </ul>
         </li>
         <li className='mr-16'>
            <a href=" " className="flex align-sidebar  justify-center items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
             <FiLogOut></FiLogOut>
               <span className=" ml-3 text-lg whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

    );
};

export default Sidebar;