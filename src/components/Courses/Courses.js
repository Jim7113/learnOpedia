import React from "react";
import CardDeck from "../CardDeck/CardDeck";
import courseInfo from "../../fakeData";

const Courses = ({ enrollHandler }) => {
  let topics = [];
  courseInfo.forEach((elem) => {
    if (!topics.find((topic) => elem.topic === topic)) {
      topics.push(elem.topic);
    }
  });

  return (
    <div>
      {topics.map((topic) => (
        <div key={topics.indexOf(topic)}>
          <h3 className="text-secondary my-3">Courses in topic : </h3>
          <CardDeck
            courseTag={topic}
            courseInfo={courseInfo}
            enrollHandler={enrollHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default Courses;
