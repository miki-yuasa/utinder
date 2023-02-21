import Link from "next/link"
import { Container } from "../Container/Container"
import { Grid } from "../Grid/Grid"
import { Stack } from "../Stack/Stack"
import { Typography } from "../Typography/Typography"

export const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    const copyRightYears: string = 2023 == currentYear ? '2023' : '2023 - ' + String(currentYear)

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} justifyContent="flex-end" rowSpacing={4}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                        <Typography fontWeight={'bold'}>SITE</Typography>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Help</Link>
                        <Link href={"/"}>Site Guidelines</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                        <Typography fontWeight={'bold'}>LEGAL</Typography>
                        <Link href={"/"}>Terms & Conditions</Link>
                        <Link href={"/"}>Privacy Policy</Link>
                    </Stack>
                </Grid>
            </Grid>
            <Typography align="center" marginTop={4}>
                Copyright © {copyRightYears} UTinder. All Rights Reserved
            </Typography>
        </Container >
    )
}