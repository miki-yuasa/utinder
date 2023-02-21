'use client'
import { Box } from "@/components/Box/Box";
import { Container } from "@/components/Container/Container";
import { Footer } from "@/components/Footer/Footer";
import { Typography } from "@/components/Typography/Typography";
import { Navigation } from "@/features/navigation";

type Option = {
    id: number
    label: string
    slug: string
}

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const options = getUniversity()
    const uni_slug: string = window.location.pathname.replace('/', '')
    const uni_name: string = options.find(option => option.slug === uni_slug)?.label!
    return (<>
        <Navigation />
        <main style={{ minHeight: '50vh' }}>
            <Container maxWidth='lg'>
                <Box marginTop={30}>
                    <Typography variant="h3" align="center"><b>{uni_name}</b>の授業評定を見る</Typography>
                </Box>
            </Container>
        </main>
        <Footer />
    </>)
}

export async function generateStaticParams() {
    const unis = await getUniversity();

    return unis.map((uni) => ({
        slug: uni.slug,
    }));
}

const getUniversity = () => {
    const options: Option[] = [{ id: 1, label: '東京大学', slug: 'utokyo' }, { id: 2, label: '慶應義塾大学', slug: 'keio' }]
    return options
}