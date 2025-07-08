import { Text } from "react-native"




const ChipText = ({ style, label } : any) => {
    return (
        <Text style={style}>
            {label}
        </Text>
    )
}