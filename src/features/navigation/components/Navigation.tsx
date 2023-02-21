import { Button } from "@/components/Button/Button"
import { AppBar } from "@/components/AppBar/AppBar"
import { Box } from "@/components/Box/Box"
import { Toolbar } from "@/components/Toolbar/Toolbar"
import { Typography } from "@/components/Typography/Typography"
import { Container } from "@/components/Container/Container"

export const Navigation = () => {
    return (
        <AppBar position="static" color="transparent" sx={{ backdropFilter: "blur(20px)", paddingTop: 6 }}>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>UTinder</Typography>
                    <Button variant='text' color='inherit'>ログイン</Button>
                    <Button variant='contained'>サインアップ</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )

}