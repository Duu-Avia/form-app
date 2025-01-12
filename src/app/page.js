"use client";
import { StepOne,  } from "./stepone";
import { StepTwo } from "./steptwo";
import { StepThree } from "./stepthree";
import { useState } from "react";
import { StepFour } from "./stepfour";

const MainBody = ({ currentStep, setCurrentStep, form, onChange, errors, setErrors }) => {
  if (currentStep === 1


  ) {
    return (
      <StepOne
        form={form}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  if (currentStep === 2) {
    return (
      <StepTwo
        form={form}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  if (currentStep === 3) {
    return (
      <StepThree
        form={form}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
      />
    );
  }
  
  if (currentStep === 4){
    return (
      <StepFour form={form} onChange={onChange} setCurrentStep={setCurrentStep}/>
    )
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber:"",
    password:"",
    confirmPassword:""

  });
  const [errors, setErrors] = useState ({
   firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    password:"",
    confirmPassword:""

  })
  
  const onChange = (e) => {
    const idTaker = e.target.id;
    const newValue = { ...form, [idTaker]: e.target.value };
    setForm(newValue);
  };

  return (
    <div className="flex justify-center mt-[200px]">
      <MainBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        form={form}
        onChange={onChange}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}
