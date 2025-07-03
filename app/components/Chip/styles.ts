import theme from "@/app/const/theme";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet({
    container: {
        borderRadius: 8,
        borderWidth: 2,
        variants: {
            active: {
                true: {
                    borderColor: theme.colors.primaryDark,
                    backgroundColor: theme.colors.primaryAccent
                },
                false: {
                    borderColor: theme.colors.disabled,
                    backgroundColor: 'white',
                }
            },
            size: {
                small: {
                    paddingHorizontal: 4,
                    paddingVertical: 2
                },
                medium: {
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                },
                large: {
                    paddingHorizontal: 8,
                    paddingVertical: 6
                }
            },

        }
    }, 
    text: {
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
                    color: theme.colors.primaryDark
                },
                false: {
                    color: theme.colors.disabled,
                }
            }
        }
    },
    content :{
        alignItems: 'center',
        justifyContent: 'center'
    }
})