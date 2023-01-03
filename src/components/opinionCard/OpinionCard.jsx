import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const OpinionCard = ({ photo, text, name, job }) => {
  return (
    <div className="opinion-card">
      <div className="opinion">
        <div className="icon">
          <FaQuoteLeft />
        </div>
        <div className="text">{text}</div>
      </div>
      <div className="author">
        <div className="photo">
          <img src={photo} alt="author_photo" />
        </div>
        <div className="details">
          <h5 className="name">{name}</h5>
          <p className="job">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
