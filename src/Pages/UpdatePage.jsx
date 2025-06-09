import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePage = () => {

    const nevigate = useNavigate();
    const tutorialsData = useLoaderData();
    // console.log(tutorialsData);

    

    // const [name , setName] = useState(tutorialsData?.name);
    // const [email , setEmail] = useState(tutorialsData?.email);
    const [image , setImage] = useState(tutorialsData?.image);
    const [language , setLanguage] = useState(tutorialsData?.language);
    const [price , setPrice] = useState(tutorialsData?.price);
    const [description , setDescription] = useState(tutorialsData?.description);

    const handleUpdate = (e) => {
    e.preventDefault();
        const updateData = {
            image,
            language,
            price,
            description
        };
        

  fetch(`http://localhost:3000/tutorials/${tutorialsData?._id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json", 
  },
  body: JSON.stringify(updateData),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to update");
    }
    return res.json();
  })
  .then((data) => {
    if (data.modifiedCount === 1) {
      Swal.fire({
        title: "Updated Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    nevigate('/myTutors');
  })
  .catch((error) => {
    console.error("Update error:", error);
    Swal.fire({
      title: "Error",
      text: "Something went wrong during the update.",
      icon: "error",
      confirmButtonText: "OK",
    });
  });



    }

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 px-20 mt-5 mb-5"
      >
        {/* Title */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            readOnly
            value={tutorialsData.name}
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
            readOnly
            value={tutorialsData.email}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea w-full"
            placeholder="Enter description"
            required
          ></textarea>
        </fieldset>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn bg-[#117a65] font-semibold text-white w-full"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
