// Create all types for the UI app

export type VariantTypes = 'filled' | 'outline' | 'text';

export type sizeTypes = 'small' | 'medium' | 'large';

export type colorTypes = 'primary' | 'secondary' | 'tertiary';

export type weightTypes = 'normal' | 'bold'

// Button props types
interface ButtonProps {
    onPress?: () => void;
    disabled?: boolean;
    variant?: VariantTypes;
    size?: sizeTypes;
    color?: colorTypes;
}

export interface ButtonTextProps {
    text?: string;
    weight?: weightTypes; 
}

export interface ButtonProps extends ButtonTextProps {}