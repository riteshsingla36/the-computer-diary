import React from "react";
import "../Css/card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/4870/course_4870_image.jpg"
        alt="not found"
      />

      <div className="details">
        <p className="course-name"> Python full stack course</p>
        <p className="tutor-details">By Kuldeep Sir</p>
        <hr />
        <div className="timings">
          <span>4.5 Hours</span>
          <span>1 ebook</span>
        </div>

        <div className="price">Free</div>

        <button>View Now</button>
      </div>
    </div>
  );
};

export default Card;
