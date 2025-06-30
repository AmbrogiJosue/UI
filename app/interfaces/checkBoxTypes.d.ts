
type ColorTypes = 'primary' | 'secondary';

type SizeTypes = 'small' | 'medium' | 'large';

interface CheckBoxType {
    on: boolean,
    color?: ColorTypes,
    disabled: boolean,
    size?: SizeTypes, 
}