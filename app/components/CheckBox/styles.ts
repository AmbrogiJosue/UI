import theme from "@/app/const/theme";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet({
  /* ───────── BUTTON ───────── */
  checkBox: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.disabled,
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      on: {
        true: { backgroundColor: theme.colors.primary,
         },
        false: { backgroundColor: 'transparent' }
      },
      size: {
        small: { minHeight: theme.sizes.small * 2,  minWidth: theme.sizes.small * 2 },
        medium: { minHeight: theme.sizes.medium * 2, minWidth: theme.sizes.medium * 2  },
        large: { minHeight: theme.sizes.large * 2, minWidth: theme.sizes.large * 2 },
      },
      disabled: {
        true: {backgroundColor: theme.colors.disabled}
      }
    },
  },
  // extraButtonStyle: (variant: VariantTypes, color: colorTypes, disabled: boolean) => {
  //   if (variant === "filled") {
  //     return { backgroundColor: disabled ? theme.colors.disabled : theme.colors[color]};
  //   }
  //   if (variant === "outline") {
  //     return { borderColor: disabled ? theme.colors.disabled : theme.colors[color] };
  //   }
  //   return {};
  // },
  //   compoundVariants: [
  //     // // background for FILLED
  //     // {
  //     //   variant: "filled",
  //     //   color: "primary",
  //     //   styles: { backgroundColor: theme.colors.primary },
  //     // },
  //     // {
  //     //   variant: "filled",
  //     //   color: "secondary",
  //     //   styles: { backgroundColor: theme.colors.secondary },
  //     // },
  //     // {
  //     //   variant: "filled",
  //     //   color: "tertiary",
  //     //   styles: { backgroundColor: theme.colors.tertiary },
  //     // },

  //     // border for OUTLINE
  //     {
  //       variant: "outline",
  //       color: "primary",
  //       styles: { borderColor: theme.colors.primary },
  //     },
  //     {
  //       variant: "outline",
  //       color: "secondary",
  //       styles: { borderColor: theme.colors.secondary },
  //     },
  //     {
  //       variant: "outline",
  //       color: "tertiary",
  //       styles: { borderColor: theme.colors.tertiary },
  //     },
  //   ],
  // },

  /* ───────── ICON ───────── */
  icon: (size: string) => {
    if (size === 'small') {
      return theme.sizes.small;
    }

    if (size === 'medium') {
      return theme.sizes.medium;
    }

    if (size === 'large'){
      return theme.sizes.large
    }
    return {}
  }
  // compoundVariants: [
  //   {
  //     variant: "text",
  //     color: "primary",
  //     styles: { color: theme.colors.primary },
  //   },
  //   {
  //     variant: "text",
  //     color: "secondary",
  //     styles: { color: theme.colors.secondary },
  //   },
  //   {
  //     variant: "text",
  //     color: "tertiary",
  //     styles: { color: theme.colors.tertiary },
  //   },
  // ],
});
