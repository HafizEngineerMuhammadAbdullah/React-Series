import React from "react";

const Card = ({data}) => {
  return (
    <div>
      <a href={data.url} target="_blank">
        <div className="h-40 w-50 rounded-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={data.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-lg">{data.author}</h2>
      </a>
    </div>
  );
};

export default Card;
