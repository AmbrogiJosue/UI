import { Text } from "react-native"
import { useContext } from "react";
import ChipContext from "./ChipContext";
import { useStyles } from "react-native-unistyles";

const ChipText = () => {
    const { textStyle, label } = useContext(ChipContext)

    //  const { styles } = useStyles(style, {
    //         size,
    //         active,
    //         disabled,
    //         variant
    //     });
    return (
        <Text testID="chip-label" style={textStyle}>
            {label}
        </Text>
    )
}

export default ChipText;