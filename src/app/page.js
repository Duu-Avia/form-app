"use client";
import { STEPONE } from "./stepone";
import { STEPTWO } from "./steptwo";
import { STEPTHREE } from "./stepthree";
import { useState } from "react";

const MainBody = ({ currentStep, setCurrentStep }) => {
  if (currentStep === 1) {
    return <STEPONE setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 2) {
    return <STEPTWO setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 3) {
    return <STEPTHREE setCurrentStep={setCurrentStep} />;
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex justify-center mt-[200px]">
      <MainBody currentStep={currentStep} setCurrentStep={setCurrentStep} />
      
    </div>
  );
}
