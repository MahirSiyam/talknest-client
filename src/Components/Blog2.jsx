import React from 'react';
import animation1 from "../assets/animation/Animation - 1.json";
import animation2 from "../assets/animation/Animation - 2.json";
import animation3 from "../assets/animation/Animation - 3.json";
import Lottie from 'lottie-react';

const Blog2 = () => {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        What Makes Us Different ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 max-w-7xl mx-auto">
    
        <div className="flex flex-col items-center text-center">
          <Lottie animationData={animation1} />
          <h3 className="text-xl font-semibold mb-3 mt-4">5000 Online Courses</h3>
          <p className="text-gray-600 text-sm">
            Learn multiple languages with our wide range of interactive and engaging courses anytime, anywhere.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Lottie animationData={animation2} className="w-full max-w-[255px] h-auto" />
          <h3 className="text-xl font-semibold mb-3 mt-4">Highly Expert Instructors</h3>
          <p className="text-gray-600 text-sm">
            Our certified language coaches help you improve your skills effectively and confidently.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Lottie animationData={animation3} className="w-full max-w-[255px] h-auto" />
          <h3 className="text-xl font-semibold mb-3 mt-4">Lifetime Access</h3>
          <p className="text-gray-600 text-sm">
            Access all your enrolled courses for life—learn at your own pace and revisit lessons anytime.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Blog2;
