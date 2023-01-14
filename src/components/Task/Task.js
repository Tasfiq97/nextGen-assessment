import React from 'react';
import "./Task.css"

const Task = () => {
    return (
        <div className='lg:ml-56 md:ml-32'>
            <h1 className='ml-16 font-bold text-left task-align'>Task Summary</h1>
            <div style={{border:"2px dashed #9747FF"}} className='  mt-8 lg:ml-16 text-xl lg:w-72 p-6 md:w-2/3'>
                <h1>Total Task</h1>
                <p className='font-bold'>112</p>
                <div class="mb-1 text-lg font-medium dark:text-white mt-5">Completed</div>
                <div style={{background:"#C6C7F8",height:"28px",width:"163px",}} className=" bg-gray-700 rounded-md dark:bg-gray-700 flex justify-between"> 
    <div style={{background:"rgba(0, 0, 0, 0.2)",height:"28px",width: "50%"}}  className="bg-blue-600 text-xs font-medium text-blue-100  p-0.5 leading-none rounded text-center"></div>
    <p className='mr-10'>50/80</p>
  </div>
  <div class="mb-1 text-lg font-medium dark:text-white mt-5">In Progress</div>
                <div style={{background:"#C6C7F8",height:"28px",width:"163px"}} className=" bg-gray-700 rounded-md dark:bg-gray-700 flex justify-between"> 
    <div style={{background:"rgba(0, 0, 0, 0.2)",height:"28px",width: "15%"}}  className="bg-blue-600 text-xs font-medium text-blue-100  p-0.5 leading-none rounded text-center"></div>
    <p className='mr-10'>15/112</p>
  </div>
  <div class="mb-1 text-lg font-medium dark:text-white mt-5">Pending</div>
                <div style={{background:"#C6C7F8",height:"28px",width:"163px"}} className=" bg-gray-700 rounded-md dark:bg-gray-700 flex justify-between"> 
    <div style={{background:"rgba(0, 0, 0, 0.2)",height:"28px",width: "30%"}}  className="bg-blue-600 text-xs font-medium text-blue-100 p-0.5 leading-none rounded text-center"></div>
    <p className='mr-10'>30/80</p>
  </div>
            </div>
        </div>
    );
};

export default Task;