import { AppBar as MuiAppBar, AppBarProps } from "@mui/material";

export const AppBar = ({ children, ...props }: AppBarProps) => {
    return (
        <MuiAppBar {...props}>
            {children}
        </MuiAppBar>
    )
}