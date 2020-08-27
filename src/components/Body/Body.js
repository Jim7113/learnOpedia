import React from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Courses from "../Courses/Courses";

function Body() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollHandler = (course) => {
    if (!enrolledCourses.find((elem) => elem.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <div className="container">
      <Cart enrolled={enrolledCourses} />
      <Courses enrollHandler={enrollHandler} />
    </div>
  );
}

export default Body;
