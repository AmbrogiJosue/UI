import theme from "@/app/const/theme";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet({
    container: (variant: string) => ({
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.colors.disabled,
        alignItems: 'center',
        justifyContent: 'center',
        variants: {
            variant: {
                outline: {
                    backgroundColor: 'transparent',
                },
                filled: {
                    backgroundColor: '#ffffff'
                }
            },
            active: {
                true: {
                    borderColor: theme.colors.primaryDark,
                    backgroundColor: variant === 'filled' ? theme.colors.primaryAccent : 'transparent'
                },
            },
            size: {
                small: {
                    paddingHorizontal: 4,
                    paddingVertical: 2
                },
                medium: {
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                },
                large: {
                    paddingHorizontal: 12,
                    paddingVertical: 6
                }
            },
            disabled: {
                true: {
                    opacity: 0.5
                }
            },

        }
    }),
    text: (variant: string) => ({
        color: theme.colors.disabled,
        variants: {
            size: {
                small: {
                    fontSize: theme.sizes.small,
                },
                medium: {
                    fontSize: theme.sizes.medium,
                },
                large: {
                    fontSize: theme.sizes.large,
                }
            },
            active: {
                true: {
                    color: variant === 'filled' ? theme.colors.primaryDark : theme.colors.primaryAccent
                },
            },
        }
    }),
    icon: {
        color: theme.colors.disabled,
        fontSize: 24,
        variants: {
            size: {
                small: {
                    fontSize: 18,
                },
                medium: {
                    fontSize: 24,
                },
                large: {
                    fontSize: 32
                }
            },
            active: {
                true: {
                    color: theme.colors.primaryDark
                }
            }
        }
    },
    content:(iconReversed: boolean) => ({
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        flexDirection: iconReversed ? 'row-reverse' : 'row'
    }),
    pressed: ( isPressed: boolean ) => ({
        opacity: isPressed ? 0.5 : 1
    }),
})