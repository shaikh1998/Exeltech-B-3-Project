import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(selector.FormOneReducer[0].fname);
    navigate("/");
  };
  return (
    <div>
      <h1>Summery</h1>
      {selector.FormOneReducer.map((item) => {
        return (
          <div>
            <p>{item.fname}</p>
            <p>{item.mname}</p>
            <p>{item.lname}</p>
            <p>{item.fullname}</p>
          </div>
        );
      })}
      <button onClick={handleClick}>Go To First Page</button>
    </div>
  );
};
export default Summary;
