import React from "react";
import quotes from "../assets/quotes.png";
import lamp from "../assets/lamp.png";
import building from "../assets/pmhs-bmdas.png";
import icoon from "../assets/icoon.webp";
import rules from "../assets/rules.png";
import logo from "./logo.png";
import { FaHandPointRight } from "react-icons/fa";

 
const About = () => {

  const cardStyle2 =
    "relative  bg-white px-4 py-3 w-[80vw] md:w-1/2 rounded-xl " +
    "shadow-md hover:shadow-2xl hover:-translate-y-1 " +
    "transition-all duration-300 ease-in-out border border-amber-300";

    const cardStyle1 =
    "relative bg-white px-4 py-3 w-[80vw] md:w-1/2 rounded-xl " +
    "shadow-md hover:shadow-2xl hover:-translate-y-1 " +
    "transition-all duration-300 ease-in-out border border-amber-300";
    const header=
    "relative top-10 m-auto font-rancho bg-white  mt-20 flex text-black justify-start   gap-1 items-start px-4 py-3 w-fit    rounded-xl " +
    "shadow-md  border border-amber-300  font-2xl  ";
    const discipline=
    "relative   m-auto font-rancho bg-white   flex flex-col text-black justify-start   gap-1 items-start px-4 py-3  w-[90vw] md:w-3/4  rounded-xl " +
    "shadow-md  border border-amber-300  font-2xl  ";

  return (

    <div

  className="flex flex-col py-8 px-4 gap-6  relative min-h-screen"
  
>
<img
  src={building}
  className="absolute inset-0 w-full h-full object-cover -z-10"
/>
<div className="absolute inset-0 bg-slate-200/30"></div>
 
<div className={header}>

 
  <img
    src={logo}
    alt="School Logo"
    className="w-14 h-14 md:w-26 md:h-26 object-contain mr-3"
  />

 
  <div className="flex flex-col text-center">
    <h1>PATNA MUSLIM HIGH SCHOOL</h1>

    <h3 className="font-bold">
      <span className="text-red-500">"Ilm , </span>
      <span className="text-blue-500">Ikhlaq</span> ,
      <span className="text-green-500"> Ibtikar”</span>
    </h3>

    <h3 className="font-bold">
      <span className="text-red-500">"Knowledge , </span>
      <span className="text-blue-500">Character</span> ,
      <span className="text-green-500"> Innovation”</span>
    </h3>
  </div>
 
  <img
    src={icoon}
    alt="School Icon"
    className="w-14 h-14 md:w-24 md:h-24 object-contain ml-3"
  />

</div>

<div className=" relative z-10 w-screen h-10"></div>
 
      <div className={`self-start ${cardStyle1}`} >
        <img src={quotes} alt="quotes" className="w-16  md:w-20 " />

        <h1 className="font-rancho text-2xl mt-2">HISTORY</h1>
        <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>

        <p className="text-sm md:text-xl leading-relaxed">
        Patna Muslim High School was established in 1938 and is the first Muslim Minority School in the State of Bihar. The school was granted permission by the Government of Bihar to start +2 (Higher Secondary) classes in Arts, Science, and Commerce for the session 1986–88, vide Letter No. 519 dated 31.10.1986.

        The school is owned, founded, and managed by the Managing Committee of Patna Muslim High School, B.M. Das Road, Patna–4. It was established primarily for the Muslim community and enjoys the Minority Rights guaranteed under Articles 25 and 30 of the Constitution of India.
        </p>
      </div>

       
      <div className={`self-end ${cardStyle2}`}>
        <img src={lamp} alt="quotes" className="w-16 md:w-20 " />

        <h1 className="font-rancho text-2xl mt-2">AIM AND OBJECTIVE</h1>
        <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>

        <p className="text-sm leading-relaxed">
       <span className="font-bold"> The main objective of establishing the school is to provide educational opportunities to the Muslim community so that they may become equal partners in the development and progress of the nation. The school imparts modern education in all spheres of knowledge, with a strong emphasis on academic excellence and character building.</span>
       <br />
       The school places special emphasis on co-curricular activities aimed at inculcating beneficial knowledge, discipline, good behavior, and proper etiquette. Students actively participate in various sports and physical activities under the guidance of trained teachers. They have also performed exceptionally well in debates and speech competitions organized by the District Magistrate’s Office, as well as in NCC and NCC Band activities, securing the Runner-Up position in the Mohali, Chandigarh Zonal NCC Band Competition.
        </p>
      </div>

       
      <div className={`self-start ${discipline}`} >
  <img
    src={rules}
    alt="School Icon"
    className="w-40 h-34 md:w-70 m-auto  md:h-54 object-contain "
  />
  
  <h1 className="text-red-700 bg-amber-100 p-2 font-bold">ADMISSION</h1>
  <h5>ADMISSION PROCEDURE</h5>
  <div className="h-0.5 bg-black w-1/3"></div>
  <p className="flex gap-1"> <FaHandPointRight size={22} /><span className="font-bold">Science</span>: Entrance Test / Interview / Merit List</p>

  <h5>DOCUMENTS REQUIRED</h5>
  <div className="h-0.5 bg-black w-1/3"></div>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Admit Card and Marksheet (10th) (Original)</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Migration Certificate and S.L.C (Original)</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Aadhaar Card (Student, Father, and Mother)</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Caste Certificate, Parental ID, and Bank Account Details</p>

  <h1 className="text-red-700 bg-amber-100 p-2 font-bold">WITHDRAWAL / DISMISSAL</h1>
  <h5>PROCEDURE</h5>
  <div className="h-0.5 bg-black w-1/3"></div>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> A parent may withdraw their ward. All dues must be cleared to obtain the Transfer Certificate.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Repeated absence without leave, or unexplained absence for more than 10 days, renders the student liable to be struck off the rolls.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Before withdrawing a student, **one month’s notice** or **one month’s fee in lieu of notice** is required upon receipt of a written application.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> The school reserves the right to dismiss a student whose diligence or progress in studies is unsatisfactory, whose conduct is harmful to the school, or whose guardians show little interest in the progress of their ward. Immorality, grave insubordination, contempt of authority, or willful damage to property constitutes sufficient reason for immediate dismissal.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> In case of dispute, the decision of the Management shall be FINAL AND BINDING.</p>

  <h1 className="text-red-700 bg-amber-100 p-2 font-bold">DISCIPLINE</h1>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Students must arrive at school **before the first bell**. Latecomers may be sent back.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> When students move along the corridors or during recess, they must walk in perfect silence and in a single file. Great care must be taken not to litter the classroom, corridor, or compound. They should use the bins to dispose of sweet wrappers, polythene bags, scraps, etc. Cell phones/mobile phones are strictly prohibited during class hours. The use of all kinds of tobacco is strictly prohibited in the school..</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Books other than textbooks, not related to study, should not be brought to school.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> **Mobile phones** are strictly prohibited during class hours.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> The use of **tobacco** in any form is strictly prohibited on school premises.</p>
  <p className="flex gap-1"> <FaHandPointRight size={22} /> Conduct contrary to discipline or damaging to the reputation of the school will result in disciplinary action against the student..</p>

  <h1 className="text-red-700 bg-amber-100 p-2 font-bold">PROMOTION</h1>
<div className="h-0.5 bg-black w-1/3"></div>
<p className="flex gap-1"> <FaHandPointRight size={22} />Students with less than 75% attendance will not be eligible for promotion. </p>
<p className="flex gap-1"> <FaHandPointRight size={22} /> No retest or re-examination will be held for a student who fails to appear for a test or examination without a valid reason and without the approval of the principal. Such absence will be treated as failure.</p>
<h1 className="text-red-700 bg-amber-100 p-2 font-bold">FOR PARENTS</h1>
<div className="h-0.5 bg-black w-1/3"></div>
<p className="flex gap-1"> <FaHandPointRight size={22} />Guide them to become resourceful members of the household and encourage self-reliance in both work and study. </p>
<p className="flex gap-1"> <FaHandPointRight size={22} />Students should dedicate at least two hours daily to studies at home. </p>
<p className="flex gap-1"> <FaHandPointRight size={22} />Inculcate the value of dignity of labor, a virtue essential for building a successful career in life. </p>
<p className="flex gap-1"> <FaHandPointRight size={22} />Guardians are responsible for the safety of their children while commuting to and from school. </p>
</div>
      <div className="w-screen h-16"></div>

    </div>
  );
};

export default About;
