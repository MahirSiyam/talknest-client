import React from "react";

const Cards = ({ bookTutor }) => {

    const {name, image, language,price, description} = bookTutor;

//   console.log(bookTutor);
  return (
    <div className="flex-col md:flex lg:card-side gap-2 bg-base-100 shadow-lg m-[34px] border-2 border-gray-50 rounded-br-4xl">
      <figure>
        <img className="h-full w-full object-cover"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body w-5/6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">Language: {language}</p>
        <p className="text-lg font-semibold">Price: {price} $</p>
        <p className="text-lg font-extralight">{description}</p>
         <div className="card-actions justify-end mt-5">
          <button className="btn bg-[#117a65] font-semibold text-white">Review</button>
         </div>
        </div>
      </div>
  );
};

export default Cards;
