import React, { Suspense, use } from "react";
import TutorsCard from "../Components/TutorsCard";
import noDataFound from "../assets/animation/No data found.json";
import Lottie from "lottie-react";
const tutorialsPromise = fetch("http://localhost:3000/tutorials").then((res) =>
  res.json()
);

const FindTutors = () => {
  const tutorials = use(tutorialsPromise);
// console.log(tutorials);
  return (
    <div>
      <Suspense
        fallback={
          <div className="max-h-screen flex justify-center items-center mt-35 mb-35">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        {tutorials.length === 0 ? (
          <Lottie
            animationData={noDataFound}
            className="w-[360px] h-[355px] mx-auto"
          ></Lottie>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-2 mb-2 p-5">
            <title>Find Tutors</title>
            {tutorials.map((tutorial) => (
              <TutorsCard key={tutorial._id} tutorial={tutorial}></TutorsCard>
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default FindTutors;
