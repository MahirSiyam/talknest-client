import React from "react";
import TutorsCard from "../Components/TutorsCard";
import noDataFound from "../assets/animation/No data found.json";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router";

const FindTutors = () => {
  const tutorials = useLoaderData();

console.log(tutorials.data);
  return (
    <div>
      {tutorials.length === 0 ? (
        <Lottie
          animationData={noDataFound}
          className="w-[360px] h-[355px] mx-auto"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-2 mb-2 p-5">
          <title>Find Tutors</title>
          {tutorials.data.map((tutorial) => (
            <TutorsCard key={tutorial._id} tutorial={tutorial} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutors;
