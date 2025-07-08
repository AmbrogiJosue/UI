import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ReactElement, ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

type sizes = 'small' | 'medium' | 'large';

type weigths = 'normal' | 'bold';

type icons = 'info' | 'danger' | 'success' | undefined

export type variants = 'outline' | 'filled';

export interface ChipTextProps {
    label: string;
    textStyle?: StyleProp<TextStyle>
}

export interface ChipIconProps {
    icon?: icons,
    iconStyle?: StyleProp<IconProps>
}

export interface ChipProps {
    size: sizes;
    active: boolean;
    disabled: boolean;
    iconReversed?: boolean;
    variant: variants;
}