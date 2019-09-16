import styled from "styled-components";

const getBorderStyle = props => {
  if (props.errorMessage) {
    return `1px solid ${props.theme.error}`;
  } else if (props.isChecked) {
    return `1px solid ${props.theme.willfulBlue}`;
  } else {
    return `1px solid ${props.theme.willfulGrey2}`;
  }
};

export const RadioSelectorWrapper = styled.div`
  box-sizing: border-box;
  min-height: 64px;
  width: 437px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 16px;
  border: ${props => getBorderStyle(props)};
  border-radius: 3px;
  transition: all 0.1s ease-in;
  margin-bottom: ${props => (props.errorMessage ? "8px" : "0px")};

  &:hover {
    background-color: ${props =>
      props.errorMessage ? "inherit" : props.theme.willfulLightBlue};
  }

  :focus {
    border: 1px solid
      ${props =>
        props.errorMessage ? props.theme.error : props.theme.willfulBlue};
    background-color: ${props =>
      props.errorMessage ? "inherit" : props.theme.willfulLightBlue};
    outline: none;
    box-shadow: none;
  }

  .label-radio-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.25px;
    line-height: 32px;
    margin-bottom: ${props => (props.withFormField ? "16px" : "0px")};
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .input-label {
      font-size: 16px;
      letter-spacing: 0.2px;
      line-height: 24px;
      color: ${props => props.theme.willfulGrey};
      margin-bottom: 8px;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${props => props.theme.error};
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 24px;
`;
