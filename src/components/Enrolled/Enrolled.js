import React from "react";

const Enrolled = ({ course }) => {
  return (
    <div className="row my-2">
      <div className="col-md-4">
        <img src={course.img} className="img-thumbnail px-3" alt="" />
      </div>
      <div className="col-md-8 my-4">
        <h6>{course.name}</h6>
        <p>by {course.instructor}</p>
      </div>
    </div>
  );
};

export default Enrolled;
