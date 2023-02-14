import { Autocomplete as MuiAutocomplete, AutocompleteProps } from "@mui/material";

export const Autocomplete = ({ ...props }: AutocompleteProps) => {
    return <MuiAutocomplete {...props} />
}