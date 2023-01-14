import React from 'react';
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import img1 from "../Images/image 5.png"
import img2 from "../Images/image 6.png"
import img3 from "../Images/image 7.png"
import img4 from "../Images/image 8.png"
import img5 from "../Images/image 9.png"
import "./Status.css"
const Status = () => {
    return (
        <div className='px-16 py-8'>
            <h1 className='lg:ml-20 font-bold company-align'>Company Status</h1>
            <div className='lg:flex px-10 py-5 card-small ' >
                <div className='ml-5'>
                    
<div style={{boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.06)"}}  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
    <div className='flex text-sm items-center '> <span className='logo-hidden'><FaUsers></FaUsers> </span> 
    <span className='ml-2 text-size text-gray-500'>Total Employee</span>
    </div>
    <div style={{marginTop:"23px"}} className='lg:grid grid-cols-2 md:grid '>
        <h4 className='text-3xl font-extrabold mt-2 text-alignment'>450</h4>
        <button style={{background:"#1E2772"}} type="button" className="text-white rounded-lg lg:text-md px-8 py-2.5 text-center mr-2 mb-2 button-small">View all</button>
    </div>
    <div style={{borderTop:"3px solid #E6E6E6"}} className=' dis-hidden flex text-center justify-start items-start mt-8 p-4'> 
    <img src={img1} alt=" " />
    <img style={{marginLeft:"-10px"}} src={img2} alt="" />
    <img style={{marginLeft:"-10px"}} src={img3} alt="" />
    <img style={{marginLeft:"-10px"}} src={img4} alt="" />
    <img style={{marginLeft:"-10px"}} src={img5} alt="" />
    <IoMdAddCircle style={{marginLeft:"-10px"}} className='text-4xl'></IoMdAddCircle>
   </div>
</div>

                </div>
                <div className='ml-5'>
                    
    <div style={{boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.06)"}}  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
    <div className='flex text-sm items-center '> <span className='logo-hidden'><FaUsers></FaUsers> </span>  
    <span className='ml-2 text-size text-gray-500'>Attend Today</span>
    </div>
    <div style={{marginTop:"23px"}} className='lg:grid grid-cols-2 md:grid '>
        <h4 className='text-3xl font-extrabold mt-2 text-alignment '>420</h4>
        <button style={{background:"#1E2772"}} type="button" className="text-white rounded-lg text-md px-8 py-2.5 text-center mr-2 mb-2 button-small">View all</button>
    </div>
    <div style={{borderTop:"3px solid #E6E6E6"}} className=' dis-hidden flex text-center justify-start items-start mt-8 p-4'> 
    <img src={img1} alt=" " />
    <img style={{marginLeft:"-10px"}} src={img2} alt="" />
    <img style={{marginLeft:"-10px"}} src={img3} alt="" />
    <img style={{marginLeft:"-10px"}} src={img4} alt="" />
    <img style={{marginLeft:"-10px"}} src={img5} alt="" />
    <IoMdAddCircle style={{marginLeft:"-10px"}} className='text-4xl'></IoMdAddCircle>
   </div>
</div>

                </div>

    <div className='ml-5'>
                    
     <div style={{boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.06)"}}  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
    <div className='flex  text-sm items-center '> <span className='logo-hidden'><FaUsers></FaUsers> </span>  
    <span className='ml-2 text-size text-gray-500'>Employees on leave</span>
    </div>
    <div style={{marginTop:"23px"}} className='lg:grid grid-cols-2 md:grid '>
        <h4 className='text-3xl font-extrabold mt-2 text-alignment '>15</h4>
        <button style={{background:"#1E2772"}} type="button" className="text-white rounded-lg text-md px-8 py-2.5 text-center mr-2 mb-2 button-small">View all</button>
    </div>
   <div style={{borderTop:"3px solid #E6E6E6"}} className=' dis-hidden flex text-center justify-start items-start mt-8 p-4'> 
    <img src={img1} alt="" />
    <img style={{marginLeft:"-10px"}} src={img2} alt="" />
    <img style={{marginLeft:"-10px"}} src={img3} alt="" />
    <img style={{marginLeft:"-10px"}} src={img4} alt="" />
    <img style={{marginLeft:"-10px"}} src={img5} alt="" />
    <IoMdAddCircle style={{marginLeft:"-10px"}} className='text-4xl'></IoMdAddCircle>
   </div>
</div>
                </div>
     <div className='ml-5'>
     <div style={{boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.06)"}}  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
    <div className='flex  text-sm items-left text-size '> <span className='logo-hidden'><FaUsers></FaUsers> </span>  
    <span className='ml-2 text-size text-gray-500'>New Expense Request</span>
    </div>
    <div style={{marginTop:"23px"}} className='lg:grid grid-cols-2 md:grid '>
        <h4 className='text-3xl font-extrabold mt-2 text-alignment '>5</h4>
        <button style={{background:"#1E2772"}} type="button" className="text-white rounded-lg text-md px-8 py-2.5 text-center mr-2 mb-2 button-small">View all</button>
    </div>
   <div style={{borderTop:"3px solid #E6E6E6"}} className=' dis-hidden flex text-center justify-start items-start mt-8 p-4'> 
    <img src={img1} alt="" />
    <img style={{marginLeft:"-10px"}} src={img2} alt="" />
    <img style={{marginLeft:"-10px"}} src={img3} alt="" />
    <img style={{marginLeft:"-10px"}} src={img4} alt="" />
    <img style={{marginLeft:"-10px"}} src={img5} alt="" />
    <IoMdAddCircle style={{marginLeft:"-10px"}} className='text-4xl'></IoMdAddCircle>
   </div>
</div>             
     </div>
            </div>
        </div>
    );
};

export default Status;