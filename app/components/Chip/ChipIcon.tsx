import { useContext } from "react"
import ChipContext from "./ChipContext"
import Ionicons from "@expo/vector-icons/Ionicons";

enum iconName {
    'info' = 'information-circle-outline',
    'danger' = 'alert-circle-outline',
    'success' = 'checkmark-circle-outline'
}

const ChipIcon = () => {
    const { icon, iconStyle } = useContext(ChipContext);
    return ( icon ? 
        <Ionicons testID="chip-icon" name={iconName[icon!]} color={iconStyle.color} size={iconStyle.fontSize} />
        : <></>
    )

}

export default ChipIcon