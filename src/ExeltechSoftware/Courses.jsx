import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Courses = () => {
  const selector = useSelector((state) => state.CourseReducer);
  return (
    <div>
      {selector.map(() => {
        return (
          <div>
            <Card>
              <Card.Img src={item.courseImg}/>
              <Card.Title>{item.courseTitle}</Card.Title>
              <Card.Text>{item.courseDesc}</Card.Text>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default Courses;
