import { TouchableOpacity, View, Text } from 'react-native'
import { ChipProps } from './interfaces'
import { useStyles } from 'react-native-unistyles'
import { styleSheet } from './styles'

const Chip = ({
    label,
    size,
    color,
    icon,
    active = false,
    iconReversed = false,
}: ChipProps) => {
    const { styles } = useStyles(styleSheet, {
        size,
        active,
    });
    return (
    <TouchableOpacity style={styles.container}>
        <View style={[ styles.content, { flexDirection: iconReversed ? 'row-reverse' : 'row'}]}>
            {icon}
            <Text style={styles.text}>{label}</Text>
        </View>
    </TouchableOpacity>)
}

export default Chip