import React from "react";
import { NavLink } from 'react-router-dom'
import pmBad from "../assets/pm-bad.jpeg";
import pmClassroom from "../assets/pm-classroom.jpeg";
import pmCompLab from "../assets/pm-comp-lab.jpeg";
import pmLab2 from "../assets/pm-lab2.jpeg";
import pmLab3 from "../assets/pm-lab3.jpeg";
import pmLab4 from "../assets/pm-lab4.jpeg";
import pmNcc from "../assets/pm-ncc.jpeg";
import pmPrincipal from "../assets/pm-principal-room.jpeg";
import pmSmartboard from "../assets/pm-smartboard.jpeg";

const About = () => {

  const cardClasses =
    "flex flex-col items-center gap-4 p-4 sm:p-6 bg-amber-50 rounded-xl shadow-md";

  const imageClasses =
    "w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg";

  const captionClasses =
    "bg-slate-600 text-white text-xs sm:text-sm md:text-base px-3 py-1 rounded-lg";

  return (
    <>
    <div className="h-7 w-screen "></div>
     
    <div className="p-4 sm:p-6 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        
        <div className={cardClasses}>
          <img src={pmBad} alt="Badminton Champion" className={imageClasses} />
          <h5 className={captionClasses}>Badminton Champion</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmClassroom} alt="Classroom" className={imageClasses} />
          <h5 className={captionClasses}>Classroom</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmCompLab} alt="Computer Lab" className={imageClasses} />
          <h5 className={captionClasses}>Computer Room</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmLab2} alt="Chemistry Lab" className={imageClasses} />
          <h5 className={captionClasses}>Chemistry Lab</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmLab3} alt="Chemistry Lab" className={imageClasses} />
          <h5 className={captionClasses}>Chemistry Lab</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmLab4} alt="Physics Lab" className={imageClasses} />
          <h5 className={captionClasses}>Physics Lab</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmNcc} alt="NCC" className={imageClasses} />
          <h5 className={captionClasses}>NCC</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmPrincipal} alt="Principal Cabin" className={imageClasses} />
          <h5 className={captionClasses}>Principal Cabin</h5>
        </div>

        <div className={cardClasses}>
          <img src={pmSmartboard} alt="Smart Classroom" className={imageClasses} />
          <h5 className={captionClasses}>Smart Classroom</h5>
        </div>

      </div>
      <div className="w-full h-10">
        
      </div>
    </div>
    </>
  );
};

export default About;
