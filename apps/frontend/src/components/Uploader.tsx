"use client";

import React from "react";
import ImageCropper from "./ImageCropper";

const Uploader = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File Selected: ", file);
    }
  };

  return (
    <div className=" flex flex-col bg-zinc-900 w-full h-full justify-center gap-10 items-center ">
      {/* TOP */}
      {/* <form className="flex flex-col justify-center items-center">
        <span className="mb-6">Upload your image</span>
        <div className=" bg-red-400 w-80 h-80 flex rounded-xl justify-center items-center overflow-hidden">
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className=" w-full h-full flex justify-center items-center cursor-pointer"
          >
            Select your image
          </label>
        </div>
      </form> */}

      {/* Bottom */}

      {/* <div className="flex flex-col justify-center items-center">
        <span className="mb-6">Preview</span>
        <div className="w-80 h-80 bg-blue-300 flex justify-center items-center rounded-xl">
          <span>Preview</span>
        </div>
      </div> */}

      <ImageCropper />
    </div>
  );
};

export default Uploader;
