import { Autocomplete as MuiAutocomplete, AutocompleteProps } from "@mui/material";

export const Autocomplete = <T,>({ ...props }: AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>) => {
    return <MuiAutocomplete {...props} />
}