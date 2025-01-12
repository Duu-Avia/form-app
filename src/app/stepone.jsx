import React from "react";
import { validationCheck, validationCheckTwo } from "./utils/validationone";

export function StepOne({ currentStep, setCurrentStep, form, onChange, errors, setErrors}) {
const {isValid} = validationCheck
if(isValid === true){
  
}

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
          <label>First name</label>
          <input
            id="firstName"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the first name"
            type="text"
            value={form.firstName}
            onChange={onChange}
          ></input>
          <div className="text-[red]">{errors.firstName}</div>
          <label>Last name</label>
          <input
            id="lastName"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the email last name"
            type="text"
            value={form.lastName}
            onChange={onChange}
          ></input>
          <div className="text-[red]">{errors.lastName}</div>  
          <label>Username </label>
          <input
            id="userName"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the email username<"
            type="text"
            value={form.userName}
            onChange={onChange}
          ></input>
          <div className="text-[red]">{errors.userName}</div>
            </form>
        </div>
      
        <button disabled={!form.userName || !form.lastName || !form.firstName}
          onClick={() => {
            const {validErrors, isValid} = validationCheck(form)
            setErrors(validErrors)
            if(isValid){
              setCurrentStep(2);
            }
           console.log(isValid)
          }}
          className="disabled:bg-[#D6D8DB] bg-[#202124] text-[#FFFFFF] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
