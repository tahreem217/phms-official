import React from 'react';
import "./Thought.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FaCopy } from "react-icons/fa6";
import building from "../assets/pmhs-bmdas.png";
const Thought = () => {

  // ✅ COPY FUNCTION
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    alert(`Copied: ${text}`);
  };

  return (
    <>
   


    <div className="box flex  relative py-20 flex-col">
 
 <div className="absolute bottom-0 left-0 w-full h-full -z-10 overflow-hidden">

 
<img
  src={building}
  alt="background"
  className="w-full h-full object-cover object-bottom"
/>

 
<div className="absolute inset-0 bg-gradient-to-t
  from-transparent
  via-white/25
  to-white">
</div>

 
 

</div>


      <div className="thought  "> 
        <h3>
          THOUGHT FOR THE DAY <FontAwesomeIcon icon={faLightbulb} />
        </h3>
        <p>
          "Education is the key to unlocking the world, a passport to freedom."
        </p>
      </div>

      <div className='flex  flex-col md:flex-row md:items-start items-center justify-center w-screen   lg:p-4 gap-6 '>
       <div className='lg:w-[800px]  text-white bg-black/20 rounded-xl  w-[80vw] px-4  text-center md:text-left'>
       <div className='font-bold text-2xl '>
          Patna Muslim High School
          
          <br/>
          Opp to Science College,Patna Bihar 800004
        </div>
       Patna Muslim High School (PMHS) is a significant educational institution in Patna, Bihar, known for catering to the Muslim community's need for modern education, aiming to blend religious and modern learning. It offers CBSE education up to +2 level, focusing on empowering students with English and science skills, reflecting the broader movement for Muslim educational upliftment in India inspired by figures like Sir Syed Ahmed Khan, who sought to modernize Muslim education. 
       </div>
      <div className="flex flex-col  pb-12  gap-2 p-4">
      
        

        <div className=" ">
          <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
          <div className="flex text-lg bg-white/30 items-center gap-2 cursor-pointer">
            <span className='text-blue-800 '>patnamuslimhighschool@gmail.com</span>
            <FaCopy
              onClick={() =>
                copyToClipboard("patnamuslimhighschool@gmail.com")
              }
              className="hover:text-blue-600"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Phone No.</h3>
          <div className="flex items-center  bg-white/30 w-fit gap-2 cursor-pointer">
            <span className='text-blue-800 '>+91 77810 90858</span>
            <FaCopy
              onClick={() => copyToClipboard("+917781090858")}
              className="hover:text-blue-600"
            />
          </div>
          <p className="text-sm text-white mt-1 font-bold"  >
            Shahnawaz Ahmad (Clerk Cum Accountant)
          </p>
         
        </div>
        <a 
          href="mailto:patnamuslimhighschool@gmail.com"
          className="bg-blue-600 m-auto text-white text-center w-40 rounded-xl py-3 px-6 no-underline!   mb-6"
        >
          Mail us directly
        </a>

      </div>
      </div>
    </div>
</>
  );
};

export default Thought;

