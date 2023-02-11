import { Stack as MuiStack, StackProps } from "@mui/system";

export const Stack = ({ children, ...props }: StackProps) => {
    return (
        <MuiStack {...props}>
            {children}
        </MuiStack>
    )
}