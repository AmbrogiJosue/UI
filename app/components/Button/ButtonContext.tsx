import { ButtonProps } from "@/app/interfaces/types";
import { useContext, createContext } from "react";

const ButtonContext = createContext<ButtonProps>({
    color: 'primary',
    icon: <></>,
    onPress: () => {},
    size: 'medium',
    variant: 'filled',
    disabled: false,
    weight: 'normal'
});
export const useButtonContext = () => {
    const context = useContext(ButtonContext);
    if (!context) {
        throw new Error("useButtonContext must be used within a ButtonProvider");
    }
    return context;
}

export const ButtonProvider = ButtonContext.Provider;