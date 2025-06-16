import React, { useEffect, useState } from "react";
import tutors from "../assets/logo/tutor.png"
import languages from "../assets/logo/languages.png"
import users from "../assets/logo/user.png"

function Stats() {
  const [stats, setStats] = useState({
    tutorCount: 0,
    userCount: 0,
    languageCount: 0,
  });

  useEffect(() => {
    fetch("https://talknest-server.vercel.app/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-xl gap-10 md:gap-15 lg:gap-20 border-1 border-gray-100 p-5 rounded-2xl">
      <div className="flex justify-center items-center">
        <img className="w-15 h-15" src={tutors} alt="" />
        <div className="stat">
        <div className="stat-title text-xl">Total Tutors</div>
        <div className="stat-value">{stats.tutorCount}</div>
      </div>
      </div>

      <div className="flex justify-center items-center">
        <img className="w-14 h-14" src={languages} alt="" />
        <div className="stat">
        <div className="stat-title text-xl">Total Languages</div>
        <div className="stat-value">{stats.languageCount}</div>
      </div>
      </div>

      <div className="flex justify-center items-center">
        <img className="w-14 h-14" src={users} alt="" />
        <div className="stat">
        <div className="stat-title text-xl">Total Users</div>
        <div className="stat-value">{stats.userCount}</div>
      </div>
      </div>
    </div>
  );
}

export default Stats;
