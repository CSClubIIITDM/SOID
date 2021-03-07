import React from "react";
import CourseDes from "./CourseDescription";

const Courses = () => {
  const courseInfo = [
    {
      level: "Level 1",
      info:
        " A basic module of six courses (18 credits) in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-right",
    },
    {
      level: "Level 2",
      info:
        "An additional set of six elective courses between 6-8 semesters, full-semester internship with industry partners in the 7th semester and an interdisciplinary project in the 8th semester (total 41 credits) to enhance the product design competence of select engineers who opt for minor / honors in product design",
      align: "content-left",
    },
    {
      level: "Level 3",
      info:
        " A dual-degree in M.Des (additional 36-41 credits) or a full-fledged 2 year M.Des program in integrated product design (92 credits) for external candidates",
      align: "content-right",
    },
    {
      level: "Level 4",
      info:
        " A PhD program in design and innovation for experienced professionals from industry or academia",
      align: "content-left",
    },
  ];

  return (
    <div
      className="container-fluid text-white"
      style={{ backgroundColor: "#747474" }}
    >
      <div className="text-center">
        <h1 className=" display-2 p-5 course-heading "
        style={{color:"#272727"}}>COURSES</h1>
      </div>

      <ul className="timeline timeline-head">
        <div className="content-left ml-5 text-dark">
          <p id="timeline-head">
          SIDI offers<span>courses and programs that develop competence
           in integrated product design</span> (a blend of technology,
            design, and business). They are aimed at nurturing 
            design talent at four levels of maturity
          </p>
        </div>
        {courseInfo.map((course) => (
          <CourseDes
            key={course.level}
            level={course.level}
            info={course.info}
            align={course.align}
          />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
