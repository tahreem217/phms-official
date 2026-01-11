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
    "relative bg-white px-4 py-3 w-[80vw] md:w-1/2 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-amber-300";

  const cardStyle1 =
    "relative bg-white px-4 py-3 w-[80vw] md:w-1/2 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-amber-300";

  const header =
    "relative top-10 m-auto font-rancho bg-white mt-20 flex text-black justify-start gap-1 items-start px-4 py-3 md:w-fit w-[95vw] mb-10 rounded-xl shadow-md border border-amber-300 font-2xl";

  const discipline =
    "relative m-auto font-rancho bg-white flex flex-col text-black justify-start gap-1 items-start px-4 py-3 w-[90vw] md:w-3/4 rounded-xl shadow-md border border-amber-300 font-2xl";

  const Bullet = ({ children }) => (
    <p className="flex gap-3 items-start">
      <span className="w-[26px] flex justify-center mt-1 shrink-0">
        <FaHandPointRight size={22} />
      </span>
      <span className="flex-1">{children}</span>
    </p>
  );

  return (
    <div className="flex flex-col py-8 px-1 gap-6 relative min-h-screen">
      <img
        src={building}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt=""
      />
      <div className="absolute inset-0 bg-slate-200/30"></div>

      <div className={header}>
        <img src={logo} alt="School Logo" className="w-14 h-14 object-contain mr-3" />

        <div className="flex flex-col text-center">
          <h1>PATNA MUSLIM HIGH SCHOOL</h1>
          <h3 className="font-bold">
            <span className="text-red-500">"Ilm , </span>
            <span className="text-blue-500">Ikhlaq</span>,
            <span className="text-green-500"> Ibtikar”</span>
          </h3>
          <h3 className="font-bold">
            <span className="text-red-500">"Knowledge , </span>
            <span className="text-blue-500">Character</span>,
            <span className="text-green-500"> Innovation”</span>
          </h3>
        </div>

        <img src={icoon} alt="School Icon" className="w-14 h-14 object-contain ml-3" />
      </div>

      <div className={`self-start ${cardStyle1}`}>
        <img src={quotes} alt="quotes" className="w-16 md:w-20" />
        <h1 className="font-rancho text-2xl mt-2">HISTORY</h1>
        <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>
        <p className="text-sm md:text-xl leading-relaxed">
          Patna Muslim High School was established in 1938 and is the first Muslim
          Minority School in the State of Bihar. The school was granted permission by
          the Government of Bihar to start +2 classes in Arts, Science, and Commerce
          for the session 1986–88, vide Letter No. 519 dated 31.10.1986.
          <br /><br />
          The school is owned, founded, and managed by the Managing Committee of
          Patna Muslim High School, B.M. Das Road, Patna–4. It was established
          primarily for the Muslim community and enjoys the Minority Rights
          guaranteed under Articles 25 and 30 of the Constitution of India.
        </p>
      </div>

      <div className={`self-end ${cardStyle2}`}>
        <img src={lamp} alt="lamp" className="w-16 md:w-20" />
        <h1 className="font-rancho text-2xl mt-2">AIM AND OBJECTIVE</h1>
        <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>
        <p className="text-sm leading-relaxed">
          <strong>
            The main objective of establishing the school is to provide educational
            opportunities to the Muslim community so that they may become equal
            partners in the development and progress of the nation.
          </strong>
          <br />
          The school places special emphasis on co-curricular activities aimed at
          inculcating beneficial knowledge, discipline, good behavior, and proper
          etiquette. Students actively participate in various sports and physical
          activities under the guidance of trained teachers.
        </p>
      </div>

      <div className={discipline}>
        <img src={rules} alt="rules" className="w-40 m-auto object-contain" />

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">ADMISSION</h1>
        <h5>ADMISSION PROCEDURE</h5>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet><strong>Science</strong>: Entrance Test / Interview / Merit List</Bullet>

        <h5>DOCUMENTS REQUIRED</h5>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet>Admit Card and Marksheet (10th) (Original)</Bullet>
        <Bullet>Migration Certificate and S.L.C (Original)</Bullet>
        <Bullet>Aadhaar Card (Student, Father, and Mother)</Bullet>
        <Bullet>Caste Certificate, Parental ID, and Bank Account Details</Bullet>

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">WITHDRAWAL / DISMISSAL</h1>
        <h5>PROCEDURE</h5>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet>A parent may withdraw their ward. All dues must be cleared to obtain the Transfer Certificate.</Bullet>
        <Bullet>Repeated absence without leave, or unexplained absence for more than 10 days, renders the student liable to be struck off the rolls.</Bullet>
        <Bullet>Before withdrawing a student, one month’s notice or one month’s fee in lieu of notice is required upon receipt of a written application.</Bullet>
        <Bullet>The school reserves the right to dismiss a student whose diligence or progress in studies is unsatisfactory.</Bullet>
        <Bullet>In case of dispute, the decision of the Management shall be FINAL AND BINDING.</Bullet>

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">DISCIPLINE</h1>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet>Students must arrive at school before the first bell. Latecomers may be sent back.</Bullet>
        <Bullet>Cell phones/mobile phones are strictly prohibited during class hours. Tobacco is strictly prohibited.</Bullet>
        <Bullet>Books other than textbooks not related to study should not be brought to school.</Bullet>
        <Bullet>Conduct contrary to discipline will result in disciplinary action.</Bullet>

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">PROMOTION</h1>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet>Students with less than 75% attendance will not be eligible for promotion.</Bullet>
        <Bullet>No retest or re-examination will be held without valid reason and principal approval.</Bullet>

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">FOR PARENTS</h1>
        <div className="h-0.5 bg-black w-1/3"></div>
        <Bullet>Guide them to become resourceful members of the household.</Bullet>
        <Bullet>Students should dedicate at least two hours daily to studies at home.</Bullet>
        <Bullet>Inculcate the value of dignity of labor.</Bullet>
        <Bullet>Guardians are responsible for the safety of their children.</Bullet>
      </div>
    </div>
  );
};

export default About;
