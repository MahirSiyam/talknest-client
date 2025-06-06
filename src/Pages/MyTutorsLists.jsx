import Lottie from "lottie-react";
import React, { use } from "react";
import noDataFound from "../assets/animation/No data found.json";

const MyTutorsLists = ({ myTutorsPromise }) => {
  const myTutors = use(myTutorsPromise);
  console.log(myTutors);
  return (
    <div>
      {myTutors.length === 0 ? (
        <Lottie
          animationData={noDataFound}
          className="w-[360px] h-[355px] mx-auto"
        ></Lottie>
      ) : (
        <div className="overflow-x-auto mt-5 mb-5 ml-30 p-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  
                </th>
                <th>Name</th>
                <th>Language</th>
                <th>Price</th>
                <th>Description</th>
                <th>Review</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              
                {
                    myTutors.map((myTutor , index)=> <tr>
                <th>
                  <label>
                    {
                        index+1
                    }
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={myTutor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myTutor.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {myTutor.language}
                </td>
                <td>{myTutor.price}</td>
                <th>
                  {myTutor.description}
                </th>
                <th>

                </th>
                <th className="flex gap-2">
                  <button className="btn">Update</button>
                  <button className="btn">Delete</button>
                </th>
              </tr>)
                }

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTutorsLists;
