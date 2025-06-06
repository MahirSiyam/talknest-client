import React, { use } from "react";
import Cards from "./Cards";

const MyBookedTutorsCard = ({ bookTutorsPromise }) => {
  const bookedTutors = use(bookTutorsPromise);
//   console.log(bookedTutors);

  return (
    <div>
      {bookedTutors.map(bookTutor => <Cards key={bookTutor._id} bookTutor={bookTutor}></Cards>)}
    </div>
  );
};

export default MyBookedTutorsCard;
