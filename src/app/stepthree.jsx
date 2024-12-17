import React from "react";

export function STEPTWO() {
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

        <button className="bg-[#D6D8DB] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]">
          Continue 1/3
        </button>
        <button className="bg-[#D6D8DB] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]">
          Back
        </button>
      </div>
    </div>
  );
}
