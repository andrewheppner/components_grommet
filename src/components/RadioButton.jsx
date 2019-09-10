import React from "react";
import { RadioButton as GrommetRadioButton, Box, Text } from "grommet";
import styled from "styled-components";

const RadioButtonMainWrapper = styled(Box)`
  border: 1px solid
    ${props => (props.errorMessage ? props.theme.colors.error : "lightgrey")};
  border-radius: 3px;
  padding: 20px 24px;
  margin-bottom: ${props => (props.errorMessage ? "16px" : "0px")};
  transition: all 0.15s ease-in;

  :hover {
    background-color: ${props => props.theme.colors.willfulLightBlue};
  }
  :focus {
    border: 1px solid ${props => props.theme.colors.willfulBlue} !important;
    background-color: ${props => props.theme.colors.willfulLightBlue};
    outline: none;
    box-shadow: none;
  }
`;

const ErrorText = styled(Text)`
  color: ${props => props.theme.colors.error};
`;

const RadioButton = ({ label, isChecked, onChange, errorMessage = null }) => (
  <>
    <RadioButtonMainWrapper
      direction="column"
      tabIndex="0"
      errorMessage={errorMessage}
    >
      <Box direction="row" align="center" justify="between">
        <Text>{label}</Text>
        <GrommetRadioButton
          checked={isChecked}
          label={undefined}
          name={label}
          onChange={onChange}
          errorMessage={errorMessage}
        />
      </Box>
    </RadioButtonMainWrapper>
    <ErrorText>{errorMessage}</ErrorText>
  </>
);

export default RadioButton;
