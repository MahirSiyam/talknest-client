import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddTutors = () => {
    const {user} = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submitData = Object.fromEntries(formData.entries());
    // console.log(submitData);

    submitData.review = [];


    axios.post('http://localhost:3000/tutorials' , submitData)
    .then(res => {
        if(res.data.insertedId)
        {
            Swal.fire({
  title: "All successfully!",
  icon: "success",
  draggable: true
});
        }
    })
    .catch(error => {
        console.log(error);
    })

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 px-20 mt-5 mb-5"
    >
      {/* Title */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Enter name"
          required
        />
      </fieldset>

      {/* Title */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          className="input w-full"
          placeholder="Enter email"
          required
        />
      </fieldset>

      {/* Image URL */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
          className="input w-full"
          placeholder="Image URL"
          required
        />
      </fieldset>

      {/* language */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Language</label>
        <input
          type="text"
          name="language"
          className="input w-full"
          placeholder="Enter language"
          required
        />
      </fieldset>

      {/* Price*/}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Price</label>
        <input
          type="number"
          name="price"
          className="input w-full"
          placeholder="Enter price"
          min="1"
          required
        />
      </fieldset>

      {/* description */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Description</label>
        <textarea
          name="description"
          className="textarea w-full"
          placeholder="Enter description"
          required
        ></textarea>
      </fieldset>

      {/* Submit Button */}
      <div className="md:col-span-2">
        <button type="submit" className="btn bg-[#117a65] font-semibold text-white w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTutors;
