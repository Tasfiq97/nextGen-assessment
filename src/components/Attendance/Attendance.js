
import React from 'react';
import Download from '../Download/Download';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';


const Attendance = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
           <div  className='bg-gray-200 lg:h-full'>
           <Download></Download>
           <Table></Table>
           </div>
        </div>
    );
};

export default Attendance;