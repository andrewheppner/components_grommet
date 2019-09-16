import React from "react";
import styled from "styled-components";

const DefaultRadioInput = ({ isChecked, handleOnChange }) => (
  <Wrapper>
    <Item>
      <RadioButton
        type="radio"
        name="radio"
        value="betterPriceOnly"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <RadioButtonLabel />
    </Item>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 32px;
  box-sizing: border-box;
  display: inline-block;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #c6e9f8;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  &:checked + ${RadioButtonLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 11px;
      height: 11px;
      margin: 4px;
      background: #0064dc;
    }
  }
`;

export default DefaultRadioInput;
