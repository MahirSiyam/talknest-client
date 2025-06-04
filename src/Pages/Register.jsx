import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import registerAnimation from "../assets/animation/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const handleGoogleLogIn = (e) => {
    e.preventDefault();

    googleLogIn(provider)
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log({ name, email, photoURL, password });

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col mb-10 md:flex-row justify-center items-center min-h-screen px-4">
      <Lottie
        animationData={registerAnimation}
        loop={true}
        style={{ maxWidth: "600px", width: "100%" }}
      />

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl border border-gray-100 rounded-2xl">
        <div className="card-body">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              required
            />

            <button className="btn btn-neutral bg-[#117a65] text-white w-full">
              Register
            </button>

            <button
              onClick={handleGoogleLogIn}
              type="button"
              className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path fill="#fff" d="m0 0H512V512H0" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </svg>
              Login with Google
            </button>

            <p className="text-center font-bold pt-2">
              Already have an account? Click{" "}
              <Link to="/auth/logIn" className="text-[#109d81]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
