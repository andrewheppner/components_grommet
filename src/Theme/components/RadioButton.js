import { css } from "styled-components";
import Colors from "../colors";
import get from "lodash/get";

const getErrorMessageProps = props =>
  get(props, "children[0].props.children[0].props.errorMessage", false);

const radioButton = {
  radioButton: {
    border: {
      width: "4px"
    },
    fill: {
      color: `${Colors.colors.willfulLightBlue2}`
    },
    extend: props => css`
      div {
        margin-right: 0px;
        div {
          border-color: ${getErrorMessageProps(props)
            ? props.theme.colors.error
            : props.theme.colors.willfulLightBlue2} !important;
          svg {
            fill: ${getErrorMessageProps(props)
              ? "white"
              : props.theme.colors.willfulBlue};
          }
        }
      }
    `
  }
};

export default radioButton;
