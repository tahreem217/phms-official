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
    "relative m-auto font-rancho bg-white flex flex-col text-black justify-start gap-2 items-start px-4 py-3 w-[90vw] md:w-3/4 rounded-xl shadow-md border border-amber-300 font-2xl";

  const Bullet = ({ children }) => (
    <p className="flex gap-2 items-start">
      <FaHandPointRight size={22} className="shrink-0 mt-1" />
      <span>{children}</span>
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

      <div className="self-start mt-10">
        <div className={cardStyle1}>
          <img src={quotes} alt="quotes" className="w-16" />
          <h1 className="font-rancho text-2xl mt-2">HISTORY</h1>
          <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>
          <p className="text-sm md:text-xl leading-relaxed">
            Patna Muslim High School was established in 1938 and is the first Muslim
            Minority School in the State of Bihar. The school was granted permission
            by the Government of Bihar to start +2 classes in Arts, Science, and
            Commerce for the session 1986–88.
          </p>
        </div>
      </div>

      <div className="self-end">
        <div className={cardStyle2}>
          <img src={lamp} alt="lamp" className="w-16" />
          <h1 className="font-rancho text-2xl mt-2">AIM AND OBJECTIVE</h1>
          <div className="h-0.5 w-1/4 bg-amber-900 my-2"></div>
          <p className="text-sm leading-relaxed">
            <strong>
              The main objective of establishing the school is to provide educational
              opportunities to the Muslim community.
            </strong>
          </p>
        </div>
      </div>

      <div className={discipline}>
        <img src={rules} alt="rules" className="w-40 m-auto object-contain" />

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">DISCIPLINE</h1>
        <div className="h-0.5 bg-black w-1/3"></div>

        <Bullet>
          Students must arrive at school <strong>before the first bell</strong>.
        </Bullet>

        <Bullet>
          Students must walk in silence in corridors. <strong>Mobile phones</strong>{" "}
          and <strong>tobacco</strong> are strictly prohibited.
        </Bullet>

        <Bullet>
          Books not related to study should not be brought to school.
        </Bullet>

        <Bullet>
          Conduct damaging to the school’s reputation will invite disciplinary
          action.
        </Bullet>

        <h1 className="text-red-700 bg-amber-100 p-2 font-bold">PROMOTION</h1>
        <div className="h-0.5 bg-black w-1/3"></div>

        <Bullet>
          Students with less than <strong>75% attendance</strong> are not eligible
          for promotion.
        </Bullet>

        <Bullet>
          No re-test will be held without valid reason and principal approval.
        </Bullet>
      </div>

      <div className="w-screen h-16"></div>
    </div>
  );
};

export default About;
