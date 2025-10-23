import React from "react";
import { Link } from "react-router";

const TutorsCard = ({ tutorial }) => {
  const { _id, name, image,price, language, review } = tutorial;

  return (
    <div className="flex-col md:flex gap-2 bg-base-100 shadow-lg border-1 border-gray-50 rounded-lg">
      <figure className="">
        <img src={image} alt={name} className="md:h-60 w-full object-cover rounded-t-lg" />
      </figure>
      <div className="card-body w-full p-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-extralight">Language: {language}</p>
        <p className="font-extralight">Price: {price}</p>
        <div className="md:flex flex-1 justify-between items-center">
          <div className="text-md font-semibold w-full md:w-1/2 lg:w-1/3 border-1 p-[5px] text-center rounded-md">Reviews: {review}</div>
          <Link to={`/tutorsDetails/${_id}`}>
            <button className="btn w-full bg-[#117a65] font-semibold text-white">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;