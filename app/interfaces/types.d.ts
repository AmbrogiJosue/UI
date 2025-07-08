// Create all types for the UI app
import { StyleProp, TextStyle } from "react-native";
import { ReactElement, ReactNode } from "react";
import type { StyleSheet } from "react-native-unistyles/lib/typescript/src/types";
export type VariantTypes = 'filled' | 'outline' | 'text';

export type sizeTypes = 'small' | 'medium' | 'large';

export type colorTypes = 'primary' | 'secondary' | 'tertiary';

export type weightTypes = 'normal' | 'bold'

// Button props types
interface ButtonProps extends ButtonTextProps {
    onPress?: () => void;
    disabled: boolean;
    variant: VariantTypes;
    size: sizeTypes;
    color: colorTypes;
    icon: ReactElement;
}

export interface ButtonTextProps implements IconProps {
    text?: string;
    weight?: weightTypes; 
    style?: StyleProp<TextStyle>;
}

export interface ButtonProps implements ButtonTextProps {}