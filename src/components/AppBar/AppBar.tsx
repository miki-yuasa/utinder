import { AppBar as MuiAppBar, AppBarProps } from "@mui/material";

export const Button = ({ children, ...props }: AppBarProps) => {
    return (
        <MuiAppBar {...props}>
            {children}
        </MuiAppBar>
    )
}