import { use, useEffect, useState } from "react";
import TutorsCard from "../Components/TutorsCard";
import Lottie from "lottie-react";
import noDataFound from "../assets/animation/No data found.json";
import { useLocation } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const FindTutors = () => {

  const {user , loading} = use(AuthContext);
  // console.log(user);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultSearch = queryParams.get("language") || "";

  const [searchTerm, setSearchTerm] = useState(defaultSearch);
  const [tutorials, setTutorials] = useState([]);
// console.log(tutorials);
  useEffect(() => {
    if(user?.accessToken)
    {
      fetch(`https://talknest-server.vercel.app/tutorials?language=${searchTerm}`, {
      headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.accessToken}`,
  },
})
      .then((res) => res.json())
      .then((data) => setTutorials(data));
    }
  }, [searchTerm , user , loading]);


useEffect(() => {
  if (user?.accessToken) {
    axios(`https://talknest-server.vercel.app/tutorials`, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then(() => {
        
        //console.log(res.data)
      })
      .catch(() => {
       //console.log(error)
      });
  }
}, [user, loading]);


  return (
    <div>
      {/* search */}
      <div className="text-center mt-10">
        <label className="input border-2 border-gray-200">
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
            placeholder="Search by language"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {/* tutors */}
      <div>
        {tutorials.length === 0 ? (
          <Lottie
            animationData={noDataFound}
            className="w-[360px] h-[355px] mx-auto"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-2 mb-2 p-2 md:p-5">
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