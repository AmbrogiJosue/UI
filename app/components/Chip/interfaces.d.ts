import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ReactElement, ReactNode, PropsWithChildren } from "react";

type sizes = 'small' | 'medium' | 'large';

export type colors = 'primary' | 'secondary' | 'tertiary';

export interface ChipProps {
    label?: string;
    size?: sizes;
    color?: colors;
    icon?: ReactElement;
    active?: boolean;
    disabled?: boolean;
    iconReversed?: boolean; 
}