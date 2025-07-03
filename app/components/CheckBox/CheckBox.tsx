import { Animated, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { styleSheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import theme from "@/app/const/theme";
import { useEffect, useRef, useState } from "react";

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
    const [active, setActive] = useState<boolean>(on)
    const { styles } = useStyles(styleSheet, {
        on: active,
        size,
        disabled,
    });

    const bgAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animate from 0 (transparent) to 1 (green)
        Animated.timing(bgAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false, // backgroundColor does not support native driver
        }).start();
    }, []);

    useEffect(() => {
        setActive(on)
    }, [on])

    // Interpolate background color
    const backgroundColor = bgAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0, 255, 0, 0)', 'rgb(0, 255, 0)'], // transparent green → solid green
    });
    return (
        <Pressable disabled={disabled} style={styles.checkBox} onPress={() => setActive(!active)}>
            {active && !disabled && <Ionicons name="checkmark" size={iconSizes[size]} color={'white'} />}
        </Pressable>
    )
}

export default CheckBox

// const Test = () => {
//     const [state, setState] = useState(false)

//     return <CheckBox on={state} onChange={(checked => setState(checked))} />
// }