import React from "react";

const ImageCard = ({ imageSrc, altText, title }) => {
  return (
    <div className="w-96 mx-4 my-6">
      <div className="bg-gray-200 border-4 p-12">
        <div className="overflow-hidden relative w-full h-80 bg-gray-300 p-2">
          <img
            src={imageSrc}
            alt={altText}
            className="object-cover w-full h-full transform hover:scale-150 transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <h4 className="text-lg font-semibold">{title}</h4>    
      </div>
    </div>
  );
};

export default ImageCard;
