import { Context, createContext } from "react";

export const ThemeContext: Context<{
    theme: "light" | "dark";
    toggleTheme: () => void;
}> = createContext<{
    theme: "light" | "dark";
    toggleTheme: () => void;
}>({
    theme: "light",
    toggleTheme: () => {}
});