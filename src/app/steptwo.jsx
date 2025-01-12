import React from "react";
import { validationCheckTwo } from "./utils/validationone";
import {page} from "./page"


export function StepTwo({currentStep, setCurrentStep, form, onChange, errors, setErrors,}) {
  
 

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

        <div id="inputContainer" className="mb-[82px]">
          <div>Email</div>
          <input
          id="email"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the email"
            type="text"
            onChange={onChange}
            value={form.email}
          ></input>
          <div className="text-[red]">{errors.email}</div>

          <label>Phone number</label>
          <input
            id="phoneNumber"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the phone number"
            type="text"
            onChange={onChange}
            value={form.phoneNumber}
          ></input>
          <div className="text-[red]">{errors.phoneNumber}</div>
          
          <div>Password</div>
          <input
            id="password"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the password"
            type="password"
            onChange={onChange}
            value={form.password}
          ></input>
          <div className="text-[red]">{errors.password}</div>

          <div>Confirm password</div>
          <input
            id="confirmPassword"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Enter the password"
            type="password"
            onChange={onChange}
            value={form.confirmPassword}
          ></input>
          <div className="text-[red]">{errors.confirmPassword}</div>
        </div>
        
        
        <div className="flex">
          <button onClick={()=>{
           
            setCurrentStep(1)
          }} className="bg-[#FFFFFF] border-[#CBD5E1] border-[2px] text-[#202124] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[40%] h-[44px] rounded-[6px]">
            Back
          </button>
          <button disabled={!form.email || !form.phoneNumber || !form.password || !form.confirmPassword}
           onClick={() => {
            const {validErrors, isValid} = validationCheckTwo(form)
            setErrors(validErrors)
            if(isValid){ 
              setCurrentStep(3)
            }
            
          }} className="disabled:bg-[#D6D8DB] bg-[#202124] text-[#FFFFFF] pt-[10px] pb-[10px] pl-[12px] pr-[12px] w-[416px] h-[44px] rounded-[6px]">
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
