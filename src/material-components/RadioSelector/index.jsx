import React from "react";
import DefaultRadioInput from "./DefaultRadioInput";
import ErrorStateRadioInput from "./ErrorStateRadioInput";
import FormField from "../FormField/index";
import { RadioSelectorWrapper, ErrorMessage } from "./style";
import PropTypes from "prop-types";

const RadioSelector = ({
  id,
  errorMessage,
  isChecked,
  onChange,
  label,
  withFormField,
  formFieldLabel,
  placeholderText,
  onFormFieldChange
}) => (
  <>
    <RadioSelectorWrapper
      id={id}
      aria-label={label}
      tabIndex="0"
      errorMessage={errorMessage}
      withFormField={withFormField}
      isChecked={isChecked}
      onClick={() => onChange(id)}
    >
      <div className="label-radio-container">
        <span>{label}</span>
        {errorMessage ? (
          <ErrorStateRadioInput
            isChecked={isChecked}
            handleOnChange={onChange}
          />
        ) : (
          <DefaultRadioInput
            isChecked={isChecked}
            handleOnChange={() => onChange(id)}
          />
        )}
      </div>
      {withFormField && (
        <div className="input-container">
          {formFieldLabel && (
            <span className="input-label">{formFieldLabel}</span>
          )}
          <FormField
            placeholder={placeholderText}
            type="text"
            name="field"
            onChange={onFormFieldChange}
          />
        </div>
      )}
    </RadioSelectorWrapper>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </>
);

RadioSelector.propTypes = {
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  withFormField: PropTypes.bool,
  formFieldLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  onFormFieldChange: PropTypes.func
};

export default RadioSelector;
