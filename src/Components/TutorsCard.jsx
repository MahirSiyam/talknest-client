import React from "react";
import { Link } from "react-router";

const TutorsCard = ({ tutorial }) => {
  const { _id, name, image, language, description, review } = tutorial;

  return (
    <div className="flex-col md:flex lg:card-side gap-2 bg-base-100 shadow-lg border-2 border-gray-50 rounded-lg">
      <figure className="">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body w-5/6 p-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-extralight">Language: {language}</p>
        <p className="font-extralight flex-wrap w-full">{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="text-md font-semibold border-1 p-[6px] rounded-md">Reviews: {review}</div>
          <Link to={`/tutorsDetails/${_id}`}>
            <button className="btn bg-[#117a65] font-semibold text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;