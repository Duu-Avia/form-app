import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Image from "next/image";
export function STEPTHREE({ currentStep, setCurrentStep, form, onChange }) {
  const [imageDrop, setImageDrop] = useState(null);
  const handleImage = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("image/")) {
      const previewIMG = URL.createObjectURL(file);
      setImageDrop(previewIMG);
    }
  };
  console.log(imageDrop);
  return (
    <div id="container" className="bg-white w-[480px] h-[655px] rounded-[8px] ">
      <div className="ml-[32px] mt-[32px]">
        <div id="textContainer" className="mb-[28px]">
          <img className="" src="./Main.png" />
          <div className="text-[#202124] text-[26px] font-[600]">
            Join Us!😎
          </div>
          <div className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </div>
        </div>

        <div id="inputContainer" className="mb-[162px]">
          <form>
            <Dropzone onDrop={handleImage}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="w-[300px] h-[200px] bg-slate-500"
                >
                  <input {...getInputProps()}></input>
                  {imageDrop ? (
                    <Image
                      src={imageDrop}
                      width={100}
                      height={100}
                      alt="Image"
                    />
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                        fill="#202124"
                      />
                    </svg>
                  )}
                </div>
              )}
            </Dropzone>
          </form>
        </div>

        <button
          onClick={() => {
            setCurrentStep(2);
          }}
          className="bg-[#D6D8DB] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
