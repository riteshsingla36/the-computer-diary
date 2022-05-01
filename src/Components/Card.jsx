import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.css";

const Card = ({ type, ele }) => {
  const navigate = useNavigate();
  return (
    <>
      {ele && (
        <div className="card">
          <img
            src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/4870/course_4870_image.jpg"
            alt="not found"
          />

          <div className="details">
            <p className="course-name">{ele.name}</p>
            <p className="tutor-details">By Kuldeep Sir</p>
            <hr />
            <div className="timings">
              <span>{ele.hours} Hours</span>
              {type === "Youtube" ? <span>{type}</span> : <span>1 {type}</span>}
            </div>

            <div className="price">Free</div>

            <button
              onClick={() => {
                type === "Quiz"
                  ? navigate(`quiz/${ele._id}`)
                  : navigate(`${type === "Youtube" ? "/" : "/"}`);
              }}
            >
              View Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
