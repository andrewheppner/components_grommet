import { css } from "styled-components";

const isPrimary = props => props.colorValue === "primary";

const button = {
  button: {
    extend: props => css`
      border-radius: 1px;
      border-width: 1px;
      border-color: ${props.theme.colors.willfulBlue};
      font-size: 1rem;

      padding: 24px 32px;
      color: ${isPrimary(props) ? "white" : props.theme.colors.willfulBlue};
      background-color: ${isPrimary(props)
        ? props.theme.colors.willfulBlue
        : "white"};
      :hover {
        border-color: ${isPrimary(props)
          ? props.theme.colors.willfulBlueDark2
          : props.theme.colors.willfulBlue};
        background-color: ${isPrimary(props)
          ? props.theme.colors.willfulBlueDark2
          : props.theme.colors.willfulLightBlue};
      }
      :focus {
        outline: 2px solid ${props.theme.colors.willfulBlueDark2};
        outline-offset: 2px;
        box-shadow: none;
      }
      @media only screen and (max-width: ${props.theme.breakpoints.small
          .value}px) {
        padding: 16px 24px;
      }
    `
  }
};

export default button;
