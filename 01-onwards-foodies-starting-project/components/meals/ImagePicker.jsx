"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex items-start gap-6 my-4">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
      >
        {label}
      </label>
      <div className="flex items-start gap-6">
        <div className="relative">
          <input
            className="hidden"
            type="file"
            id={name}
            name={name}
            accept="image/*"
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button
            className="border-0 py-2 px-6 bg-[#a4abb9] rounded cursor-pointer font-inherit hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && <p className="m-0 p-4">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
