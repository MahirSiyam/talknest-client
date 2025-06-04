import Lottie from "lottie-react";
import React from "react";
import error from "../assets/animation/error.json"
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-10 text-base-200 dark:text-base-content">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">

        <Lottie animationData={error}></Lottie>
          <Link to={'/'}
            rel="noopener noreferrer"
            href="#"
            // className="px-8 py-3 font-semibold rounded text-base-200 dark:text-base-content"
            className="btn btn-neutral px-8 py-3 font-semibold rounded mt-4 bg-[#117a65] text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
