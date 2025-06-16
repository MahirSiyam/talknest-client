import React from "react";
import ReviewButton from "../Components/ReviewButton";

const Cards = ({ bookTutor }) => {
  const { _id , name, image, language, price, description } = bookTutor;

  return (
    <div className="flex-col md:flex lg:card-side gap-2 bg-base-100 shadow-lg m-[34px] border-2 border-gray-50 rounded-br-4xl">
      <figure>
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body w-5/6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">Language: {language}</p>
        <p className="text-lg font-semibold">Price: {price} $</p>
        <p className="text-lg font-extralight">{description}</p>
        <div className="card-actions justify-between mt-5">
        <ReviewButton tutorId={_id} />
        </div>
      </div>
    </div>
  );
};

export default Cards;