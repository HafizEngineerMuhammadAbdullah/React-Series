import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold flex justify-center items-center h-12 w-12 rounded-full">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-xl mb-14 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dignissimos quidem tempore incidunt, enim hic.
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}}className="text-white font-medium px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="text-white font-medium px-4 py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
