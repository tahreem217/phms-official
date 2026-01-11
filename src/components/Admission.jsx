import React, { useState, useEffect } from "react";
import success from "../assets/successs.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaHandPointRight } from "react-icons/fa";

const Admission = () => {
  const tableWrapper = "relative w-[90vw] md:w-1/2  overflow-x-auto   ";
  const tableBase =
    "  m-auto border-collapse border border-gray-300  text-sm";
  const cell = "border border-gray-300 px-2   py-2 text-center";
  const headerCell =
    "border border-gray-300 px-2   py-3 text-center font-bold";
  const footerCell =
    "border border-gray-300 px-2  py-3 text-center font-semibold";
  const rowTitle = "font-medium whitespace-nowrap  ";

  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#FF7F7F", "#990000"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev === 0 ? 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 sm:gap-10">

      
      <div className="flex bg-amber-100 py-4 sm:py-6 flex-col items-center gap-3 sm:gap-5 text-center px-3">
        <h2 className="font-rancho text-sm sm:text-2xl md:text-5xl lg:text-7xl text-gray-800">
          Welcome to Patna Muslim High School
        </h2>

        <h4 className="font-pacifico text-xs sm:text-lg md:text-3xl">
          Where knowledge meets opportunity — Join our community!
        </h4>

        <h6
          style={{
            backgroundColor: colors[colorIndex],
            transition: "background-color 0.5s ease-in-out",
          }}
          className="text-white px-3 py-2 text-xs sm:text-sm md:text-base rounded"
        >
          Admission for Batch 2025 starts at 12/02/2026!
        </h6>

        <h6 className="bg-green-400 px-3 py-1 text-xs sm:text-sm rounded">
          Timing: 12:30 PM to 4:30 PM
        </h6>
      </div>
 
       

    <div className="flex flex-col md:flex-row   justify-center items-center m-4 ">
      <div className="flex flex-col md:w-1/2    pl-10 ">
        <h5>ELIGIBILITY FOR <span className="text-red-400">ADMISSION</span> IN +2</h5>
        <div className="h-0.5 bg-black w-3/4"></div>
        <p className="flex gap-1"> <FaHandPointRight size={22} />   Minimun 45% marks in 10th needed</p>
        <br />
        <h5>ADMISSION PROCEDURE</h5>
        <div className="h-0.5 bg-black w-3/4"></div>
        <p className="flex gap-1"> <FaHandPointRight size={22} /><span className="font-bold">Science:</span><span className="block sm:inline">Entrance test/Interview/Merit list</span></p>
        <p className="flex gap-1"> <FaHandPointRight size={22} /><span className="font-bold">Art:</span><span className="block sm:inline">Interview/Merit list</span></p>
        <p className="flex gap-1"> <FaHandPointRight size={22} /><span className="font-bold">Commerce:</span><span className="block sm:inline">Interview/Merit list</span></p>
        <br />
        <h5>DOCUMENTS REQUIRED</h5>
    
        <div className="h-0.5 bg-black w-3/4"></div>
        <p className="flex gap-1"> <FaHandPointRight size={22} /> Admit Card and Marksheet (10th)(Original)</p>
        
         
        <p className="flex gap-1"> <FaHandPointRight size={22} />  Migration Certificate and S.LC(Original)</p>
        <p className="flex gap-1"> <FaHandPointRight size={22} /> Adhar(Of student,father and mother)</p>
        <p className="flex gap-1"> <FaHandPointRight size={22} /> Caste Certificate,APaar id and Bank A/C</p>
         

      </div>
      <div className={tableWrapper}>
        <table className={tableBase}>
          <thead>
            <tr className="bg-amber-50 text-sm sm:text-lg md:text-xl">
              <th className={`${headerCell} pl-2 sm:pl-4`}>Class</th>
              <th className={headerCell}>Student</th>
              
              <th className={headerCell}>Fees(Yearly)</th>
            </tr>
          </thead>

          <tbody className="bg-slate-100">
            {[
              ["Class VI", 31,  "₹3000"],
              ["Class VII", 37,  "₹3000"],
              ["Class VIII", 58,  "₹3000"],
              ["Class IX", 68,  "₹3000"],
              ["Class X", 88,  "₹3000"],
              ["Class IX:Science", 256, "₹8000+(₹2000 Promotion fees)"],
              ["Class IX:Commerce", 256,  "₹8000+(₹2000 Promotion fees)"],
              ["Class IX:Arts", 256, "₹8000+(₹2000 Promotion fees)"],
              
            ].map((row, i) => (
              <tr key={i} className="bg-white">
                <th className={`${cell} ${rowTitle}`}>{row[0]}</th>
                <td className={cell}>{row[1]}</td>
                <td className={cell}>{row[2]}</td>
                
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="bg-slate-200">
              <th className={footerCell}>Total</th>
              <td className={footerCell}>1050</td>
              <td className={footerCell}></td>
              
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
               
      <div className="bg-pink-200 font-pacifico text-black w-[90vw] m-auto text-[10px] flex flex-col sm:flex-row items-center sm:items-start justify-center md:gap-1 md:text-base text-center rounded-3xl font-bold p-1 pt-2"><p>No student should be denied education due to financial constraints. Fee concessions may be provided to support students in need </p><TiHeartFullOutline size={23} /></div>
      <div className="bg-red-800 font-pacifico text-white w-[90vw] m-auto text-[10px] flex flex-col sm:flex-row items-center sm:items-start justify-center md:gap-1 md:text-base text-center rounded-3xl font-bold p-1 pt-2"><p>Students maintaining 75% or more will will get scholarship worth ₹1000 </p></div>

    <div className="bg-white h-20 w-screen"></div>
    </div>
  );
};

export default Admission;
