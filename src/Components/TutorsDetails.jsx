import React from "react";
import { useLoaderData } from "react-router";

const TutorsDetails = () => {
  const details = useLoaderData();
  const { _id, name, image, language, description , price } = details;

  return (
    <div className="flex-col md:flex lg:card-side gap-2 bg-base-100 shadow-lg m-[34px] border-2 border-gray-50 rounded-tr-4xl">
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div className="p-5 space-y-5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">Language: {language}</p>
        <p className="text-lg font-semibold">Price: {price} $</p>
        <p className="text-lg font-extralight">{description}</p>
        <div className="card-actions">
          <button className="btn bg-[#117a65] font-semibold text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetails;
