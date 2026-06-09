import React from "react";
import { Bookmark } from "lucide-react";

const Card = (job) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={job.companyLogo} alt="" />
          <button>
            Save <Bookmark size={19} />
          </button>
        </div>
        <div className="center">
          <h3>
            {job.companyName} <span>{job.datePosted}</span>
          </h3>
          <h2>{job.post}</h2>
          <div className="tags">
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{job.payment}</h3>
          <p>{job.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
