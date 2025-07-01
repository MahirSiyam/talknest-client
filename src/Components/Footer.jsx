import React from "react";
import logo from "../assets/logo/linguistic_7514362.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-base-300 dark:text-base-content">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row border-b-2 lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3 flex md:justify-center lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="flex items-center gap-2 md:ml-20">
            <img className="w-10 md:w-12" src={logo} alt="Talknest logo" />
            <p className="text-2xl font-bold text-base-200 dark:text-base-content">Talknest</p>
          </a>
        </div>

        {/* Navigation + Socials */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-1/2 sm:grid-cols-4">
          {/* Navigation Links */}
          <div className="space-y-3 col-span-2 sm:col-span-2">
            <div className="grid grid-cols-1 gap-1 text-base-content">
              <Link to="/">Home</Link>
              <Link to="/findTutors">Find Tutors</Link>
              <Link to="/addTutors">Add Tutors</Link>
              <Link to="/myTutors">My Tutors</Link>
              <Link to="/myBookedTutors">My Booked Tutors</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3 text-base-200 dark:text-base-content col-span-2 sm:col-span-2">
            <div className="uppercase">Social media</div>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a rel="noopener noreferrer" href="#" title="Facebook" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                  <path d="M32 16c0-8.839-7.167-16-16-16S0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803v-11.177H9.437v-4.625H13.5v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584.312 3.584.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-.713 4.625h-3.724v11.177C26.151 30.604 32 23.984 32 16z" />
                </svg>
              </a>
              {/* Twitter */}
              <a rel="noopener noreferrer" href="#" title="Twitter" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              {/* Instagram */}
              <a rel="noopener noreferrer" href="#" title="Instagram" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16 0C11.651 0 11.109.021 9.407.093 7.698.177 6.542.442 5.522.838c-1.052.412-1.948.959-2.833 1.849-.891.885-1.443 1.781-1.849 2.833C.444 6.54.179 7.698.095 9.407.021 11.109 0 11.651 0 16s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885.412 1.052.959 1.948 1.849 2.833.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745C11.109 31.979 11.651 32 16 32s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745C20.891.021 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553.751.291 1.276.635 1.844 1.197.557.557.901 1.088 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.563.557-1.099.901-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459s.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557C11.219 2.901 11.719 2.88 16 2.88zM16 7.787a8.213 8.213 0 100 16.426 8.213 8.213 0 000-16.426zm0 13.546a5.333 5.333 0 110-10.667 5.333 5.333 0 010 10.667zm10.464-13.874a1.921 1.921 0 11-3.844 0 1.921 1.921 0 013.844 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-6 text-sm text-center text-base-200 dark:text-base-content">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
