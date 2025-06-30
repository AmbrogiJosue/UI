import { TouchableOpacity } from "react-native";
import { ButtonProps } from "@/app/interfaces/types";
import ButtonText from "./ButtonText";
import { useStyles } from "react-native-unistyles";
import { ButtonProvider } from "./ButtonContext";
import { styleSheet } from "@/app/components/Button/styles";

const Button = ({
  onPress,
  text = "Button Text",
  disabled = false,
  variant = "filled",
  color = "primary",
  weight = "normal",
  size = "medium",
}: ButtonProps) => {
  // Apply styles from the unistyle stylesheet depending on the props
  const { styles } = useStyles(styleSheet, {
    variant,
    size,
  });
  return (
    <ButtonProvider value={{ text, variant, weight, size, color, disabled}}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.button, styles.extraButtonStyle(variant, color, disabled)]}
      >
        <ButtonText />
      </TouchableOpacity>
    </ButtonProvider>
  );
};

export default Button;
