import { createContext, useContext } from "react";
import { ChipIconProps, ChipProps, ChipTextProps } from "./interfaces";

const ChipContext = createContext<ChipProps & ChipTextProps & ChipIconProps>({
    size: 'medium',
    active: false,
    disabled: false,
    iconReversed: false,
    label: 'Label',
    icon: undefined,
    variant: 'filled'
})

export default ChipContext;