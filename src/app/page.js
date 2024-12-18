"use client";
import { STEPONE } from "./stepone";
import { STEPTWO } from "./steptwo";
import { STEPTHREE } from "./stepthree";
import { useState } from "react";

const MainBody = ({ currentStep, setCurrentStep,form,onChange, }) => {
  if (currentStep === 1) {
    return <STEPONE form={form} onChange={onChange} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 2) {
    return <STEPTWO form={form} onChange={onChange} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 3) {
    return <STEPTHREE form={form} onChange={onChange} setCurrentStep={setCurrentStep} />;
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState ({
    firstName: '',
    lastName: '',
    userName: ''
  })
  
  const onChange = (e)=>{
  const idTaker = e.target.id;
  const newValue = {...form, [idTaker]: e.target.value}
  setForm(newValue)
  }



  return (
    <div className="flex justify-center mt-[200px]">
      <MainBody currentStep={currentStep} setCurrentStep={setCurrentStep} form={form} onChange={onChange}  />
      
    </div>
  );
}
