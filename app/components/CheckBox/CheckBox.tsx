import { Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { styleSheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import theme from "@/app/const/theme";

enum iconSizes {
    small = theme.sizes.small,
    medium = theme.sizes.medium,
    large = theme.sizes.large,
}

const CheckBox = ({
    on = false,
    color = 'primary',
    disabled = false,
    size = 'medium'
}: CheckBoxType) => {
    const {styles} = useStyles(styleSheet, {
        on,
        size,
        disabled,
    })
    return (
        <Pressable disabled={disabled} style={styles.checkBox} onPress={() => on = !on}>
            {on && !disabled && <Ionicons name="checkmark" size={iconSizes[size]} color={'white'}/>}
        </Pressable>
    )
}

export default CheckBox