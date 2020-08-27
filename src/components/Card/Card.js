import React from "react";

function Card(props) {
  const { img, name, instructor, rating, price, tags } = props.info;
  return (
    <div className="card">
      <img
        className="card-img-top"
        style={{ height: 200 }}
        src={img}
        alt={name}
      ></img>
      <div className="card-body d-flex flex-column align-items-baseline justify-content-between">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{instructor}</p>
        <h5>Rating:{rating}</h5>
        <h5>${price}</h5>
        <p className="badge badge-info">{tags}</p>
        <button
          className="btn btn-danger"
          onClick={() => props.enrollHandler(props.info)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Card;
