import { Stack } from "../types/Stack";
import icons from "../icons/icons";

const badges = {
  [Stack.Pipeline]: {
    icon: icons.Pipeline,
    label: "Pipeline",
    bgColor: "#88726D",
  },
  [Stack.Python]: {
    icon: icons.Python,
    label: "Python",
    bgColor: "#3870A0",
  },
  [Stack.Qt6]: {
    icon: icons.Qt,
    label: "Qt6",
    bgColor: "#49C758",
  },
};

export default badges;
