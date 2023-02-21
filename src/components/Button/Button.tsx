import { Button as MuiButoon, ButtonProps } from "@mui/material";

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <MuiButoon {...props}>
            {children}
        </MuiButoon>)
}

export type { ButtonProps }