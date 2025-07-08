import { ButtonTextProps}  from "@/app/interfaces/types";
import { Text } from 'react-native';
import { useButtonContext } from "./ButtonContext";
import { useStyles } from "react-native-unistyles";
import { styleSheet } from "./styles";
 
const ButtonText = () => {
    const {weight, size, text, variant, color, disabled}  = useButtonContext();
    // Map unsupported weights to valid fontWeight values
    const { styles } = useStyles(styleSheet, { variant, weight, size });
    return (
        <Text style={[styles.text, styles.extraTextStyle(variant, color, disabled)]}>
            {text}
        </Text>
    )
}

export default ButtonText;