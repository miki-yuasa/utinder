'use client'
import { Box } from "@/components/Box/Box";
import { Container } from "@/components/Container/Container";
import { Typography } from "@/components/Typography/Typography";
import { Navigation } from "@/features/navigation";



export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return (
        <main>
            <Navigation />
            <Container maxWidth='lg' >
                <Box marginTop={30}>
                    <Typography variant="h3" align="center"> <b>東京大学</b>の授業評定を見る</Typography>
                </Box>
            </Container>
        </main>
    )
}

export async function generateStaticParams() {
    const unis = await getUniversity();

    return unis.map((uni) => ({
        slug: uni.name,
    }));
}

const getUniversity = () => {
    return ([{ name: 'utokyo' }, { name: 'keio' }])
}