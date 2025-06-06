import React, { use } from "react";
import Cards from "./Cards";
import noDataFound from "../assets/animation/No data found.json";
import Lottie from "lottie-react";

const MyBookedTutorsCard = ({ bookTutorsPromise }) => {
  const bookedTutors = use(bookTutorsPromise);
  console.log(bookedTutors);

  return (
    <div>
      {
        bookedTutors.length === 0 ? <Lottie animationData={noDataFound} className="w-[360px] h-[355px] mx-auto"></Lottie> : <div>{bookedTutors.map(bookTutor => <Cards key={bookTutor._id} bookTutor={bookTutor}></Cards>)}</div>
      }
    </div>
  );
};

export default MyBookedTutorsCard;
