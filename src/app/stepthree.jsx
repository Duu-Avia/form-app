import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Image from "next/image";




export function StepThree({ currentStep, setCurrentStep, form, onChange }) {
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
    <div id="container" className="bg-white w-[480px] h-[100%] rounded-[8px] ">
      <div className="px-[32px] ">
        <div id="textContainer" className="pb-[28px]">
          <img className="" src="./Main.png" />
          <div className="text-[#202124] text-[26px] font-[600]">
            Join Us!😎
          </div>
          <div className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </div>
        </div>

        <div id="inputContainer" className="mb-[162px]">
          <form className="border-solid border-1px ">
            <label className="text-[#334155] text-[14px] font-[600]"> date of birth
            <input className="border-solid border-[1px] w-[90%] h-[44px] rounded-[8px] focus:outline-none mt-[10px]" type="date" required></input>
            </label>
            
            <div className="text-[#334155] text-[14px] font-[600] py-[10px]">Profile image</div>
            <Dropzone onDrop={handleImage}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="w-[416px] h-[180px] bg-[#7F7F800D] flex justify-center items-center"
                >
                  <input type="file" {...getInputProps()}></input>
                  {imageDrop ? (
                    <Image className="w-[416px] h-[180px]"
                      src={imageDrop}
                      width={400}
                      height={180}
                      alt="Image"
                    />
                  ) : (
                    <div> 
                      <div className="pl-[25px] pb-[13px]"> <svg
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
                    </svg></div><div>Add image</div></div>
                 
                  )}
                </div>
              )}
            </Dropzone>
          </form>
        </div>

         
               <div className="flex">
                 <button onClick={()=>{
                  
                   setCurrentStep(2)
                 }} className="bg-[#FFFFFF] border-[#CBD5E1] border-[2px] text-[#202124] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[40%] h-[44px] rounded-[6px]">
                   Back
                 </button>
                 <button disabled={!imageDrop }
                  onClick={() => {
                     setCurrentStep(4)
                   
                   
                 }} className="disabled:bg-[#D6D8DB] bg-[#202124] text-[#FFFFFF] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]">
                   Continue 1/3
                 </button>
               </div>
      </div>
    </div>
  );
}
