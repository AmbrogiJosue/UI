
type ColorTypes = 'primary' | 'secondary' | 'tertiary';

type SizeTypes = 'small' | 'medium' | 'large';

interface CheckBoxType {
    on: boolean,
    color?: ColorTypes,
    disabled: boolean,
    size?: SizeTypes, 
}