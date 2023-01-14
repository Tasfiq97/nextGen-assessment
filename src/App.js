
import './App.css';
import Attendance from "./components/Attendance/Attendance"
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import MainDashboard from './components/MainDashboard/MainDashboard';

function App() {
  return (
    <BrowserRouter>
     <div className='App'>
    <div className='lg:flex'>
      <Sidebar></Sidebar>
   <div className='lg:ml-0 h-screen w-full'>
    <Routes>
      <Route path="/attendance" element={<Attendance></Attendance>}></Route>
      <Route path="/" element={<MainDashboard></MainDashboard>}></Route>
    </Routes>
   
   </div>
   
</div>
</div>
  </BrowserRouter>
   
  );
}

export default App;
