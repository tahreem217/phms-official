import React from 'react'
import principal from "./dada.jpeg"
import "./Notices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Notices = () => {
  return (
    <div className="linkAndMessage " >

      <div className="notices ">
        <h2> <FontAwesomeIcon icon={faLink} /> Important Links</h2>
        <div className="links ">
          <div className="w-full">
            <div 
              
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <h4 id="list-item-1">BSEB Official Website</h4>
              <p>Portal for news, notifications, and updates.</p>
              <a href="https://biharboardonline.bihar.gov.in/" target="_blank" rel="noreferrer">Visit Website</a>

              <h4 id="list-item-2">Circulars & Notices</h4>
              <p>Official board circulars for students and schools.</p>
              <a href="https://biharboardonline.com/" target="_blank" rel="noreferrer">View Circulars</a>

              <h4 id="list-item-3">Date Sheet / Time-Table</h4>
              <p>Download exam schedule for 10th & 12th.</p>
              <a href="https://biharboardonline.bihar.gov.in/" target="_blank" rel="noreferrer">View Date Sheet</a>

              <h4 id="list-item-4">Admit Card</h4>
              <p>Download Matric & Intermediate admit cards.</p>
              <a href="https://biharboardonline.bihar.gov.in/" target="_blank" rel="noreferrer">Download Admit Card</a>

              <h4 id="list-item-5">Results</h4>
              <p>Check 10th & 12th results online.</p>
              <a href="https://results.biharboardonline.net.in/" target="_blank" rel="noreferrer">Check Results</a>

              <h4 id="list-item-6">Class 10 Syllabus</h4>
              <p>Download official syllabus for Class 10.</p>
              <a href="https://biharboardonline.com/files/CLASS_10_SYLLABUS%20.pdf" target="_blank" rel="noreferrer">Download 10th Syllabus</a>

              <h4 id="list-item-7">Class 12 Syllabus</h4>
              <p>View syllabus for Class 12 exams.</p>
              <a href="https://biharboardonline.bihar.gov.in/" target="_blank" rel="noreferrer">View 12th Syllabus</a>
            </div>
          </div>
        </div>
      </div>

      <div className="principal  ">
        <h2>
          <FontAwesomeIcon icon={faBullhorn} /> Principal’s Message
        </h2>
        <img src={principal} alt="img" />
        <h5>IZHAR YUSUF</h5>
        <p>  
  Welcome to our school, where education goes beyond textbooks. We foster academic excellence while nurturing health, hygiene, discipline, and ethical values. Co-curricular activities like sports, arts, and clubs help students discover talents, teamwork, and leadership. Our goal is to guide every child toward becoming confident, responsible, and capable citizens. Together with parents and staff, we strive to create a safe, inspiring, and holistic learning environment.

 
</p>
      </div>

    </div>
  )
}

export default Notices
