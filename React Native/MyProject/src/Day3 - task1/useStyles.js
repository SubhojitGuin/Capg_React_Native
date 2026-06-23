import { useWindowDimensions } from "react-native";
import mobileStyles from "./mobileStyles"; 
import tabletStyles from "./tabletStyles";

const useStyles = () => {
  const { width } = useWindowDimensions();
  return width < 768 ? mobileStyles : tabletStyles;
};

export default useStyles;
