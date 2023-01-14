import React from 'react';
import "./Chart.css"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
const Chart = () => {

    const data = [
      {
        name: "Oct 30",
        uv: 1200,
        pv: 100,
        amt: 0
      },
        {
          name: "Nov 1",
          uv: 600,
          pv: 800,
          amt: 3000
        },
        {
          name: "Nov 4",
          uv: 1100,
          pv: 1398,
          amt: 1210
        },
        {
          name: "Nov 8",
          uv: 1400,
          pv: 10800,
          amt: 5290
        },
        {
          name: "Nov 12",
          uv: 600,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Nov 16",
          uv: 1600,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Nov 24",
          uv: 900,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Nov 28",
          uv: 1600,
          pv: 4300,
          amt: 2100
        },
        {
          name: "Nov 30",
          uv: 600,
          pv: 4300,
          amt: 2100
        },
        {
          name: "Nov 20",
          uv: 1400,
          pv: 4300,
          amt: 2100
        }
      ];
    return (
        <div className='ml-28 bg-white px-8 py-2 mt-10 chart-size'  style={{width:"100%", height:"40vh",marginBottom:"60px",textAlign:"center"}}>
            <div className='lg:flex md:flex justify-between items-center pt-10 pb-5  export-size'>
                <div className='flex justify-between '>
                  <p className='ml-4 font-bold'>Day</p>
                  <p className='ml-4'>Week</p>
                  <p className='ml-4'>Month</p>
                  <p className='ml-4'>Year</p>
                </div>
                <div>
                <button style={{background:"#1E2772"}} type="button" class="text-white  focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-size">Export Details</button>
                </div>
              </div>
          <ResponsiveContainer width="100%" height="50%">
        <AreaChart
        width={600}
      height={400}
      data={data}
      margin={{
        top: 40,
        right: 10,
        left: 0,
        bottom: 0
      }}
        ><XAxis dataKey="name" />
          <Tooltip />
     <Area  type="monotone" dataKey="uv" stroke="#1E2772" fill="#b0aee7" />
        </AreaChart>
        </ResponsiveContainer>
        </div>
       
    );
};

export default Chart;