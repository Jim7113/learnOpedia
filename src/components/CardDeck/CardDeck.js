import React from "react";
import Card from "../Card/Card";

function CardDeck({ courseTag, courseInfo, enrollHandler }) {
  let courses = courseInfo.filter((item) => item.topic === courseTag);
  return (
    <div>
      <div className="card-deck mb-5">
        {courses.map((item) => (
          <Card key={item.id} info={item} enrollHandler={enrollHandler} />
        ))}
      </div>
    </div>
  );
}

export default CardDeck;
