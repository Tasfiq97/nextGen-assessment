import React from 'react';
import Chart from '../Chart/Chart';
import Navbar from '../Navbar/Navbar';
import Status from '../Status/Status';
import Task from '../Task/Task';
import "./MainDashboard.css"

const MainDashboard = () => {
    return (
        <div>
            <div className='bg-gray-100'>
            <Navbar></Navbar>
           <div  className='bg-gray-200 lg:h-full'>
            
<nav className=" px-8 sm:px-4 py-8 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <span  className="flex items-center heading-size">
        <h1 style={{fontSize:"40px",color:"#102048",fontWeight:"700"}}  className="self-center whitespace-nowrap dark:text-white px-16 pt-20 heading-size ">Dashboard</h1>
    </span>
  </div>
</nav>
<Status></Status>

           </div>
         
           <div className='bg-gray-200 '>
           <h1 className='ml-32 font-bold h1-align expense-align'>Expense Report</h1>
            <div className='lg:flex lg:justify-between w-full '>
            <div className='w-2/4 width-size mt-5 '>
            <Chart></Chart>
            </div>
            <div className='w-2/4 width-size'>
            <Task></Task>
            </div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default MainDashboard;