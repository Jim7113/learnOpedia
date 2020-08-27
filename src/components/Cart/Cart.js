import React from "react";
import Enrolled from "../Enrolled/Enrolled";

const Cart = ({ enrolled }) => {
  let total = enrolled.reduce(
    (totalPrice, elem, index) => elem.price + totalPrice,
    0
  );
  return (
    <div className="row mb-5 p-4 border">
      <div className="col-md-8">
        <h5 className="mb-3">{enrolled.length} Courses in the Cart</h5>
        {enrolled.map((elem) => (
          <Enrolled course={elem} key={elem.id} />
        ))}
      </div>
      <div className="col-md-4">
        <h4>Total : </h4>
        <h2>${Math.round(total)}</h2>
        <div>
          <input
            type="text"
            className="form-control"
            style={{ width: 175 }}
            placeholder="Enter Coupon"
          />
          <button className="btn btn-sm btn-danger my-2">Enter</button>
        </div>
        <button className="btn btn-lg btn-danger my-3">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
