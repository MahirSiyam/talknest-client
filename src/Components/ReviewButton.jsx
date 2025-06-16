import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const ReviewButton = ({ tutorId }) => {
  const { user } = use(AuthContext);

  const handleReview = async () => {
    try {
      const res = await axios.put(
        `https://talknest-server.vercel.app/updateReview/${tutorId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
// console.log(res);
      if (res.data.tutorialResult.modifiedCount > 0) {
        Swal.fire({
          title: "Review Added!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error adding review",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <button onClick={handleReview} className="btn bg-[#117a65] font-semibold text-white">Review</button>
  );
};

export default ReviewButton;