import { Text } from "react-native"
import { useContext } from "react";
import ChipContext from "./ChipContext";

const ChipText = () => {
    const { textStyle, label } = useContext(ChipContext)
    return (
        <Text style={textStyle}>
            {label}
        </Text>
    )
}

export default ChipText;