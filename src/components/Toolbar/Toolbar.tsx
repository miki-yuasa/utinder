import { Toolbar as MuiToolbar, ToolbarProps } from "@mui/material";

export const Toolbar = ({ children, ...props }: ToolbarProps) => {
    return (
        <MuiToolbar {...props}>{children}</MuiToolbar>
    )
}