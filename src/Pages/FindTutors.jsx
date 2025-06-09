import React, { useEffect, useState } from "react";
import TutorsCard from "../Components/TutorsCard";
import noDataFound from "../assets/animation/No data found.json";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router";

const FindTutors = () => {
  const tutorialsDB = useLoaderData();
  const [tutorials, setTutorials] = useState(tutorialsDB.data || []);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/tutorials?language=${searchTerm}`)
      .then(res => res.json())
      .then(data => setTutorials(data))
  }, [searchTerm])

  return (
    <div>
      <div className="text-center mt-10">
        <label className="input border-2 border-gray-500">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="text" 
          name="search" 
          required 
          placeholder="Search by language" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </label>
      </div>

      <div>
        {tutorials.length === 0 ? (
          <Lottie
            animationData={noDataFound}
            className="w-[360px] h-[355px] mx-auto"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-2 mb-2 p-5">
            <title>Find Tutors</title>
            {tutorials.map((tutorial) => (
              <TutorsCard key={tutorial._id} tutorial={tutorial} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindTutors;