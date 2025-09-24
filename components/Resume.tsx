import { useEffect } from "react";
import type { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default  function Resume() {
  useEffect(() => {
    if (window.parent) {
      parent.postMessage(
        {
          action: "iframeLoaded",
          height: document.body.scrollHeight,
        },
        "*"
      );
    }
  }, []);

  return ( 
      <div className="parent top-remove" id="document">
        <main className="resume-container">
          <section  style={{padding:0,paddingBottom:20}} className="section headerInfo" >
            <div className="headerLeft">
              <div className="name-padding" data-cg-sec="name">
                <div className="name">
                  <span className="field" data-cg-prop="fname">
                    Ankush{" "}
                  </span>
                  <span className="field lastName" data-cg-prop="lname">
                    Verma
                  </span>
                </div>
              </div>
            </div>
            <div className="addressRight SECTION_CNTC" data-cg-sec="name">
              <div className="iconList">
                <span data-cg-prop="phoneDetails">
                    <a href="tel:+919450118849">+91 9450118849</a> 
                    </span>
               <FontAwesomeIcon icon={faPhone} className="green"  />
              </div>
              <div className="iconList">
                <span data-cg-field="email">
                  <a href="mailto:ankushvx@gmail.com">ankushvx@gmail.com</a>
                </span> 
               <FontAwesomeIcon icon={faEnvelope} className="green"  /> 
              </div>
              <div className="address">
                <span data-cg-prop="completeAddress">Meerut, UP</span>
                
               <FontAwesomeIcon icon={faMapMarkerAlt} className="green"  /> 
             
              </div>
            </div>
          </section>
          <div className="headerTopSection">
            <section style={{padding:0}} className="content-section summary" data-cg-sec="summary">
              <div className="sectionDetails" data-cg-field="description">
                Software Developer with a proven track record in collaborating
                effectively within cross-functional teams to deliver
                high-quality projects. Exceptional written and verbal
                communication skills demonstrated through clear technical
                documentation and effective collaboration with stakeholders.
                Strong interpersonal abilities fostered through building
                positive relationships with team members and clients, ensuring
                smooth project lifecycles.
              </div>
            </section>
          </div>
          <div className="firstSection"></div>

          <section style={{padding:0}}
            className="content-section section skills"
            data-cg-sec="skills"
          >
            <article className="skills">
              <h1>
                <span>
                  <i className="fa fa-bar-chart"></i>Skills
                </span>
              </h1>
              <ul className="sectionDetails skillRounded">
                <li className="sectionDetails" data-cg-field="skills">
                  C#
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  .NET CORE
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  .NET WEB API
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  JavaScript
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  HTML
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  CSS
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Next.js
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Node.js
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Flutter
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Dart
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Git
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  GitHub
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Jira
                </li>
                <li className="sectionDetails" data-cg-field="skills">
                  Microsoft SQL Server
                </li>
              </ul>
            </article>
          </section>

          <section style={{padding:0}}
            className="content-section section experience"
            data-cg-sec="experience"
          >
            <article className="experience">
              <h1 className="heading">
                <i className="fa fa-briefcase"></i>Experience
              </h1>

              <div className="sectionDetails sectionList" data-cg-para="0">
                <div className="data">
                  <div className="company" data-cg-field="employer">
                    {" "}
                    Swami Vivekanand Subharti University
                  </div>
                  <div className="job-title" data-cg-field="jobTitle">
                    Software Developer
                  </div>
                  <div className="dateBox">
                    <span className="date" data-cg-prop="expDate">
                      Apr 2024 - Present
                    </span>
                    <span className="city-state" data-cg-prop="expCityOrState">
                      Meerut, UP
                    </span>
                  </div>
                </div>

                <div className="description" data-cg-field="description">
                  <p>
                    <span>
                      Designed and developed a University Management System
                      (UMS) using .NET 8.0, C#, Web API, SQL Server, and a
                      3-tier architecture with distinct layers: Presentation
                      Layer, Business Logic Layer (BLL), and Data Access Layer
                      (DAL).
                    </span>
                  </p>
                  <br />
                  <p>Features of the System:</p>
                  <br />
                  <p>
                    Student Management: Add, update, delete student records, and
                    view student details.
                  </p>
                  <br />
                  <p>
                    Course Management: Add, update, delete courses, and assign
                    them to students.
                  </p>
                  <br />
                  <p>
                    Faculty Management: Add, update, and delete faculty details.
                  </p>
                  <br />
                  <p>
                    Authentication &amp; Authorization: Admin, Faculty, and
                    Student roles with secure login.
                  </p>
                  <br />
                  <p>
                    Developed and implemented an Employee Management System
                    utilizing .NET Core 3.1 and .NET Web API.
                  </p>
                  <br />
                  <p>
                    Streamlined and optimized various processes, enhancing
                    operational efficiency and productivity.
                  </p>
                  <br />
                  <p>
                    Currently engaged in enterprise resource planning,
                    leveraging advanced technologies like .NET Core 7.0 and .NET
                    Web API 7.0.
                  </p>
                </div>
              </div>

              <div className="sectionDetails sectionList" data-cg-para="1">
                <div className="data">
                  <div className="company" data-cg-field="employer">
                    Swami Vivekanand Subharti University
                  </div>
                  <div className="job-title" data-cg-field="jobTitle">
                    Jr. Software Developer
                  </div>
                  <div className="dateBox">
                    <span className="date" data-cg-prop="expDate">
                      Oct 2020 - Mar 2024
                    </span>
                    <span className="city-state" data-cg-prop="expCityOrState">
                      Meerut, UP
                    </span>
                  </div>
                </div>
                <div className="description" data-cg-field="description">
                  <ul>
                    <li>
                      - Devised and executed an employee management system
                      leveraging dot net core 3.1 and dot net web API - Enhanced
                      operational efficiency and productivity by streamlining
                      and optimizing processes - Fostered collaboration with
                      cross-functional teams to ensure smooth integration and
                      functionali ty - Achieved successful delivery of a
                      user-friendly interface, leading to improved user
                      experience and heightened employee satisfaction
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sectionDetails sectionList" data-cg-para="2">
                <div className="data">
                  <div className="company" data-cg-field="employer">
                    BizCamp
                  </div>
                  <div className="job-title" data-cg-field="jobTitle">
                    Trainee Software developer
                  </div>
                  <div className="dateBox">
                    <span className="date" data-cg-prop="expDate">
                      May 2020 - Sep 2020
                    </span>
                  </div>
                </div>
                <div className="description" data-cg-field="description">
                  <ul>
                    <li>
                      - Trained as a software developer, excelled in coding and
                      debugging software programs, collaborated effectively with
                      team members to enhance project efficiency, delivered
                      innovative solutions to complex technical challenges, and
                      consistently met project deadlines. - Efficiently learned
                      new programming languages and technologies, continuously
                      improving coding skills. - Demonstrated strong
                      problem-solving abilities and contributed to the
                      successful completion of software development projects.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </section>

          <section style={{padding:0}}
            className="content-section section education"
            data-cg-sec="education"
          >
            <article className="education">
              <h1 className="heading">
                <i className="fa fa-mortar-board"></i>Education
              </h1>

              <div className="sectionDetails sectionList" data-cg-para="0">
                <div className="data">
                  <div className="company" data-cg-prop="eduSchoolOrUniv">
                    School Of Engineering &amp; Technology, Shridhar University
                  </div>
                  <div className="job-title" data-cg-field="eduDegreeSpcl">
                    Master of Computer Applications (MCA)
                  </div>

                  <span className="date" data-cg-prop="eduDate">
                    Aug 2024
                  </span>
                  <span className="city-state" data-cg-prop="eduCityOrState">
                    Pilani, Rajasthan
                  </span>
                </div>
                <div className="description" data-cg-field="description">
                  <p>I am pursuing a degree.</p>
                </div>
              </div>
              <div className="sectionDetails sectionList" data-cg-para="1">
                <div className="data">
                  <div className="company" data-cg-prop="eduSchoolOrUniv">
                    Subharti Vivekanand Subharti University
                  </div>
                  <div className="job-title" data-cg-field="eduDegreeSpcl">
                    Bachelor of Computer Applications, CGPA: 71%
                  </div>

                  <span className="date" data-cg-prop="eduDate">
                    Aug 2023
                  </span>
                </div>
              </div>
              <div className="sectionDetails sectionList" data-cg-para="2">
                <div className="data">
                  <div className="company" data-cg-prop="eduSchoolOrUniv">
                    Subharti Institute of technology &amp; Engineering
                  </div>
                  <div className="job-title" data-cg-field="eduDegreeSpcl">
                    Diploma in Engineering, CGPA: 73%
                  </div>

                  <span className="date" data-cg-prop="eduDate">
                    Apr 2020
                  </span>
                </div>
              </div>
              <div className="sectionDetails sectionList" data-cg-para="3">
                <div className="data">
                  <div className="company" data-cg-prop="eduSchoolOrUniv">
                    IKS INTER COLLEGE, BANKASIYA SHIV RATAN SINGH, GONDA, UTTER
                    PRADESH
                  </div>
                  <div className="job-title" data-cg-field="eduDegreeSpcl">
                    Intermediate (12th), CGPA: 54%
                  </div>

                  <span className="date" data-cg-prop="eduDate">
                    May 2018
                  </span>
                  <span className="city-state" data-cg-prop="eduCityOrState">
                    UTTER PRADESH
                  </span>
                </div>
              </div>
            </article>
          </section>
          <section style={{padding:0}}
            className="content-section section languageSection"
            data-cg-sec="language"
          >
            <h1 className="heading">
              <i className="fa fa-language"></i>Language
            </h1>
            <div
              className="sectionDetails languageDetails languageRounded"
              data-cg-field="description"
            >
              <ul>
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>
          </section>
          <section style={{padding:0}}
            className="content-section section projectsSection"
            data-cg-sec="projects"
          >
            <h1 className="heading">
              <i className="fa fa-file-lines"></i>Projects
            </h1>
            <div className="sectionDetails" data-cg-field="description">
              <p>
                <strong>
                  University Management System (UMS) (02/2024 - Present)
                </strong>
              </p>
              <br />
              <p>
                A comprehensive web application designed to manage student
                records, courses, faculty, and authentication.
              </p>
              <br />
              <p>
                Developed using .NET 8.0, C#, Web API, SQL Server with a 3-tier
                architecture.
              </p>
              <br />
              <p>
                <strong>
                  AQAR (Annual Quality Assurance Report) Portal (06/2022 -
                  04/2023)
                </strong>
              </p>
              <br />
              <p>
                A web-based system for streamlining AQAR submission and
                verification processes.
              </p>
              <br />
              <p>
                Built using .NET Core, C#, Web API, SQL Server and a 3-tier
                architecture.
              </p>
              <br />
              <p>Key Features:</p>
              <br />
              <p>
                ✅ User Tracking &amp; Audit Logs: Tracks data modifications,
                approvals, and rejections.
              </p>
              <br />
              <p>
                ✅ Role-Based Access Control (RBAC): Secure roles for faculty,
                admin, and IQAC reviewers.
              </p>
              <br />
              <p>
                ✅ Automated Notifications: Real-time alerts for submission
                deadlines.
              </p>
              <br />
              <p>
                <strong>
                  Employee Management System (EMS) (12/2020 - 07/2022)
                </strong>
              </p>
              <br />
              <p>
                Developed a modern employee management solution using .NET Core
                3.1.
              </p>
              <br />
              <p>
                Features employee profile management, attendance tracking, and
                payroll automation.
              </p>
              <br />
              <p>
                <strong>
                  Enterprise Resource Planning (ERP) (08/2020 - 03/2021)
                </strong>
              </p>
              <br />
              <p>Designed a dynamic ERP system for educational institutions.</p>
              <br />
              <p>
                Simplifies student registration, admissions, lecture scheduling,
                and secure fee payments.
              </p>
            </div>
          </section>
        </main>
      </div> 
  );
};
 
