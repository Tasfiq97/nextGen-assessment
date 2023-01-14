import React from 'react';
import {AiFillEye} from "react-icons/ai"
import docs from "../Images/FileDoc.png"
import "./Table.css"
const Table = () => {
    return (
        <div className=' lg:p-12 pb-12'>
            
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full table-size text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Department
                </th>
                <th scope="col" className="px-6 py-3">
                    Check in
                </th>
                <th scope="col" className="px-6 py-3">
                    Check Out
                </th>
                <th scope="col" className="px-6 py-3">
                    Remarks
                </th>
                <th scope="col" className="px-6 py-3">
                    Hours
                </th>
                <th scope="col" className="px-6 py-3">
                    Overtime
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className= "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jahid Hasan
                </th>
                <td className="depert-align px-6 py-4 text-black font-semibold">
                HR & Admin
                </td>
                <td className=" depert-align px-6 py-4 ">
                   <span style={{backgroundColor:"#4AA785"}} className=' text-white p-1 px-2 rounded-lg '> 9:45 am</span>
                </td>
                <td className=" depert-align px-6 py-4">
                <span style={{backgroundColor:"#4AA785"}} className=' text-white p-1 px-2 rounded-lg '> 6:05 pm</span>
                </td>
                <td className="px-6 py-4">
    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-2">
                    <a href=" " className="font-medium text-4xl text-blue-800 dark:text-blue-500 hover:underline"><AiFillEye></AiFillEye></a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jahid Hasan
                </th>
                <td className=" depert-align px-6 py-4 text-black font-semibold ">
                HR & Admin
                </td>
                <td className=" depert-align px-6 py-4 ">
                   <span style={{backgroundColor:"#E25959"}} className=' text-white p-1 px-2 rounded-lg '> 10:30 am</span>
                </td>
                <td className=" depert-align px-6 py-4">
                <span style={{backgroundColor:"#E25959"}}className=' text-white p-1 px-2 rounded-lg '> 5:30 pm</span>
                </td>
                <td className="px-6 py-4">
                <img src={docs} alt="" />
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-2">
                    <a href=" " className="font-medium text-4xl text-blue-800 dark:text-blue-500 hover:underline"><AiFillEye></AiFillEye></a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jahid Hasan
                </th>
                <td className=" depert-align px-6 py-4 text-black font-semibold ">
                HR & Admin
                </td>
                <td className=" depert-align px-6 py-4 ">
                   <span style={{backgroundColor:"#4AA785"}} className=' text-white p-1 px-2 rounded-lg '> 9:45 am</span>
                </td>
                <td className=" depert-align px-6 py-4">
                <span style={{backgroundColor:"#4AA785"}} className=' text-white p-1 px-2 rounded-lg '> 6:30 pm</span>
                </td>
                <td className="px-6 py-4">
    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-2">
                    <a href=" " className="font-medium text-4xl text-blue-800 dark:text-blue-500 hover:underline"><AiFillEye></AiFillEye></a>
                </td>
            </tr>
            <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jahid Hasan
                </th>
                <td className=" depert-align px-6 py-4  text-black font-semibold">
                HR & Admin
                </td>
                <td className=" depert-align px-6 py-4 ">
                   <span style={{backgroundColor:"#E25959"}} className=' text-white p-1 px-2 rounded-lg '> 10:30 am</span>
                </td>
                <td className=" depert-align px-6 py-4">
                <span style={{backgroundColor:"#E25959"}}className=' text-white p-1 px-2 rounded-lg '> 5:30 pm</span>
                </td>
                <td className="px-6 py-4">
                <img src={docs} alt="" />
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-2">
                    <a href=" " className="font-medium text-4xl text-blue-800 dark:text-blue-500 hover:underline"><AiFillEye></AiFillEye></a>
                </td>
            </tr>
            
        </tbody>
    </table>
    <nav className="flex nav-full nav-width justify-end items-end pt-32 pb-32 pr-20  w-full  bg-white" aria-label="Table navigation">
    
        <ul className="inline-flex items-center -space-x-px">
            <li>
                <a href=" " className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li>
            <a href=" " aria-current="page" className="z-10 px-3 py-2 leading-tight text-gray-500 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
            </li>
            <li>
                <a href=" " className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
            <a href=" " className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
            </li>
            <li>
            <a href=" " className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
            <a href=" " className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a href=" " className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
        </ul>
    </nav>
</div>

        </div>
    );
};

export default Table;