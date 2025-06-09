import Lottie from "lottie-react";
import React, { use, useState } from "react";
import noDataFound from "../assets/animation/No data found.json";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router";

const MyTutorsLists = ({ myTutorsPromise }) => {
  const myTutors = use(myTutorsPromise);
    // console.log(myTutors);

  const [myTutorsData, setMyTutorsData] = useState(myTutors);

  console.log(myTutorsData);

  const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/tutorials/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myTutorsData.filter(
              (tutorsData) => tutorsData._id !== id
            );
            setMyTutorsData(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
    }
  });
};

  return (
    <div>
      {myTutorsData.length === 0 ? (
        <Lottie
          animationData={noDataFound}
          className="w-[360px] h-[355px] mx-auto"
        ></Lottie>
      ) : (
        <div className="overflow-x-auto mt-5 mb-5 p-5">
          <table className="table">
            {/* head */}
            <thead className="">
              <tr className="">
                <th className="border-1 border-gray-50"></th>
                <th className="border-1 border-gray-50">Name</th>
                <th className="border-1 border-gray-50">Language</th>
                <th className="border-1 border-gray-50">Price</th>
                <th className="border-1 border-gray-50">Description</th>
                <th className="border-1 border-gray-50">Review</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myTutorsData.map((myTutor, index) => (
                <tr key={index} className="">
                  <th className="border-1 border-gray-50">
                    <label>{index + 1}</label>
                  </th>
                  <td className="border-1 border-gray-50">
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
                  <td className="border-1 border-gray-50">
                    {myTutor.language}
                  </td>
                  <td className="border-1 border-gray-50">{myTutor.price}</td>
                  <th className="border-1 border-gray-50">
                    {myTutor.description}
                  </th>
                  <th className="border-1 border-gray-50"></th>
                  <th className="flex gap-2">
                    <Link to={`/update/${myTutor._id}`}><button className="btn bg-[#117a65] font-semibold text-white">
                      <MdOutlineTipsAndUpdates size={23} />
                    </button></Link>
                    <button
                      onClick={() => handleDelete(myTutor?._id)}
                      className="btn bg-[#117a65] font-semibold text-white"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTutorsLists;
