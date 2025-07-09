import { Pressable, View } from 'react-native'
import { ChipIconProps, ChipProps, ChipTextProps } from './interfaces'
import { useStyles } from 'react-native-unistyles'
import { styleSheet } from './styles'
import ChipContext from './ChipContext'
import ChipIcon from './ChipIcon'
import ChipText from './ChipText'

const Chip = ({
    label,
    size = 'medium',
    icon,
    active = false,
    disabled = false,
    iconReversed = false,
    variant = 'filled',
    onPress,
}: ChipProps & ChipTextProps & ChipIconProps) => {
    const { styles } = useStyles(styleSheet, {
        size,
        active,
        disabled,
        variant
    });

    return (
        <ChipContext.Provider value={{ variant, size, active, disabled, label, textStyle: styles.text(variant), icon, iconStyle: styles.icon}}>
            <Pressable testID='pressable-chip' style={({ pressed }) => [styles.container(variant), styles.pressed(pressed)]} disabled={disabled} onPress={onPress}>
                <View style={[styles.content(iconReversed),]}>
                    <ChipIcon/>
                    <ChipText/>
                </View>
            </Pressable>
        </ChipContext.Provider>
    )
}

export default Chip

// Chip.Text = function ChipText() {
//     const props = useContext(ChipContext);

//     return (
//         <ChipText />
//     )
// }