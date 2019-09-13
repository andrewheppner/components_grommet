import React from "react";
import DefaultRadioInput from "./DefaultRadioInput";
import ErrorStateRadioInput from "./ErrorStateRadioInput";

const RadioSelector = () => (
  <>
    <DefaultRadioInput />
    <ErrorStateRadioInput />
  </>
);

export default RadioSelector;
