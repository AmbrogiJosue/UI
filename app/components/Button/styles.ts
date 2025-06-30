import theme from "@/app/const/theme";
import { colorTypes, VariantTypes } from "@/app/interfaces/types";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet({
  /* ───────── BUTTON ───────── */
  button: {
    padding: 12,
    borderRadius: 8,

    variants: {
      variant: {
        filled: { borderWidth: 0 },
        outline: { backgroundColor: "transparent", borderWidth: 1 },
        text: { backgroundColor: "transparent" },
      },
      size: {
        small: { minHeight: theme.sizes.small * 2 },
        medium: { minHeight: theme.sizes.medium * 2 },
        large: { minHeight: theme.sizes.large * 2 },
      },
    },
  },
  extraButtonStyle: (variant: VariantTypes, color: colorTypes, disabled: boolean) => {
    if (variant === "filled") {
      return { backgroundColor: disabled ? theme.colors.disabled : theme.colors[color]};
    }
    if (variant === "outline") {
      return { borderColor: disabled ? theme.colors.disabled : theme.colors[color] };
    }
    return {};
  },
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

  /* ───────── TEXT ───────── */
  text: {
    variants: {
      size: {
        small: { fontSize: theme.sizes.small },
        medium: { fontSize: theme.sizes.medium },
        large: { fontSize: theme.sizes.large },
      },
      weight: {
        normal: { fontWeight: "normal" },
        bold: { fontWeight: "bold" },
      },
      variant: {
        filled: {
          color: theme.colors["text-light"],
        },
      },
    },
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
  },
  extraTextStyle: (variant: VariantTypes, color:colorTypes, disabled: boolean) => {
    if (disabled){
      return { color: variant === 'filled' ? theme.colors["text-light"] : theme.colors.disabled}
    }

    if (variant === 'outline' || variant === 'text'){
      return {color: theme.colors[color]}
    }
    return {}
  }
});
