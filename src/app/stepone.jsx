import React from "react";

export function STEPONE({ currentStep, setCurrentStep, form, onChange, }) {

    const errorRegex = /[1234567890!@#$%^&*()_+{}|:"<>?[',.]/

  const valdationCheck =(field, message)=>{
    if(errorRegex.test(form[field])){
      return <div className="text-[red]">{message}</div>
    }

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
            placeholder="First name"
            type="text"
            value={form.firstName}
            onChange={onChange}
          ></input>
          <div>{valdationCheck('firstName', 'Please provide a valid first name')}</div>
          <label>Last name</label>
          <input
            id="lastName"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Last name"
            type="text"
            value={form.lastName}
            onChange={onChange}
          ></input>

          <div>{valdationCheck('lastName', 'Please provide a valid last name')}</div>
          <label>Username </label>
          <input
            id="userName"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Username<"
            type="text"
            value={form.userName}
            onChange={onChange}
          ></input>
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
