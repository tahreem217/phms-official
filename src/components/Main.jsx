import React from 'react'
import "./Main.css"
import img1 from "./pmhs1.jpeg"
import img2 from "./pmhs3.jpeg"
import icoon from "../assets/icoon.webp";
import rules from "../assets/rules.png";
import logo from "./logo.png";
import img3 from "../assets/pm-bad.jpeg";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Main = () => {
  const header=
  "relative top-10 m-auto font-rancho bg-white  mt-20 flex text-black justify-start   gap-1 items-start px-4 py-3 md:w-fit w-[95vw]   mb-10  rounded-xl " +
  "shadow-md  border border-amber-300  font-2xl  ";
  return (
    <>
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
<div className='h-10 w-screen'></div>

<div className="w-full relative h-10"></div>
 

     <div className="main">


        <div className="carousel ">
       <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={img2} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={img1} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={img3} className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
    </div>


    <div className="mission ">
        <h3>OUR Mission</h3>
        <p>
        Our mission is to provide quality education to all students, promoting inclusion of every section of society. We focus on the overall development of each child, nurturing academic skills, creativity, and moral values. By fostering discipline, empathy, and social responsibility, we aim to prepare students to become compassionate, responsible citizens. Through a safe and supportive environment, we empower young minds to grow, learn, and contribute positively to society.
        </p>
        <h3>OUR VISION</h3>
        <p>Our vision is to be a center of excellence in education, fostering an inclusive environment where every student can thrive. We aspire to nurture knowledge, creativity, and critical thinking while instilling strong moral values. By promoting holistic growth, equality, and social responsibility, we aim to develop confident, compassionate individuals who contribute positively to society and emerge as responsible leaders capable of meeting the challenges of the future.</p>
    </div>

   
     </div> 
      </>
  )
}

export default Main
