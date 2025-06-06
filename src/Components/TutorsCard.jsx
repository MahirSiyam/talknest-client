import React from "react";
import { Link } from "react-router";

const TutorsCard = ({ tutorial }) => {
  const { _id, name, image, language, description } = tutorial;

  return (
    <div className="card card-side bg-base-100 shadow-lg border-1 border-gray-100 rounded-2xl">
      <figure className="w-1/2">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-extralight">Language: {language}</p>
        <p className="font-extralight">{description}</p>
        <div className="card-actions justify-end mt-5">
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
