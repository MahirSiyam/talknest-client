import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const TutorsDetails = () => {
    const {user} = use(AuthContext);
    // console.log(user);
  const details = useLoaderData();
  const { _id, email , name, image, language, description , price } = details;

//   console.log(details);

    const handleBookNow = () => {

        const booktutors = {
            _id,
            image,
            language,
            price,
            tutorEmail: email,
            user: user.email
        }

        axios.post('http://localhost:3000/bookTutors' , booktutors)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })

    }

  return (
    <div className="flex-col md:flex lg:card-side gap-2 bg-base-100 shadow-lg m-[34px] border-2 border-gray-50 rounded-tr-4xl">
        <title>Tutor Details</title>
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
          <button onClick={handleBookNow} className="btn bg-[#117a65] font-semibold text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetails;
