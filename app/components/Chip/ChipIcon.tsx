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
    console.log(iconStyle);
    return icon ? (
        <Ionicons name={iconName[icon!]} color={iconStyle.color} size={iconStyle.fontSize} />
    ) : <></>
}

export default ChipIcon