import { Autocomplete } from "@/components/Autocomplete/Autocomplete"
import { Button } from "@/components/Button/Button"
import { TextField, TextFieldProps } from "@/components/TextField/TextField"

export const Page = (params: { params: { uni: string } }) => {
    return (
        <main>
            <div className={styles.center}>
                <h1 className={inter.className}>東京大学の<b>教授</b>を探す</h1>
            </div>
            <div className={styles.center}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params: TextFieldProps) => <TextField {...params} label="教科" />}
                />
            </div>
            <div className={styles.center}>
                <Button variant='text' color='inherit'><b>教科を探す</b></Button>
            </div>

        </main>
    )
}