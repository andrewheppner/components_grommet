import ColorsTheme from "./colors";
import FontTheme from "./fonts";
import Components from "./components";
import Breakpoints from "./breakpoints";
const grommetTheme = {
  ...ColorsTheme,
  ...FontTheme,
  ...Components,
  ...Breakpoints
};

export default grommetTheme;
