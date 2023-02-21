import { Button } from "@/components/Button/Button"
import { AppBar } from "@/components/AppBar/AppBar"
import { Box } from "@/components/Box/Box"
import { Toolbar } from "@/components/Toolbar/Toolbar"
import { Typography } from "@/components/Typography/Typography"
import { Container } from "@/components/Container/Container"
import { Stack } from "@/components/Stack/Stack"
import Link from "next/link"

export const Navigation = ({ paddingTop = 12 }: { paddingTop?: number }) => {
    return (
        <AppBar elevation={0} position="static" color="transparent" sx={{ backdropFilter: "blur(20px)", paddingTop: paddingTop }}>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        <Link href={"/"}>UTinder</Link>
                    </Typography>
                    <Stack spacing={2} direction='row'>
                        <Button variant='text' >ログイン</Button>
                        <Button variant='contained'>サインアップ</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )

}