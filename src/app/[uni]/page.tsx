'use client'
import { Autocomplete } from "@/components/Autocomplete/Autocomplete";
import { Box } from "@/components/Box/Box";
import { Container } from "@/components/Container/Container";
import { Footer } from "@/components/Footer/Footer";
import { TextField, TextFieldProps } from "@/components/TextField/TextField";
import { Typography } from "@/components/Typography/Typography";
import { Navigation } from "@/features/navigation";
import { usePathname } from 'next/navigation';


export default function Page({ params }: { params: { slug: string } }) {
    const uni_slug = usePathname()?.replace("/", "")

    const { slug } = params;
    const options = getUniversity()
    const uni = options.find(option => option.slug === uni_slug)!
    const uni_name: string = uni.label
    return (<>
        <Navigation />
        <main style={{ minHeight: '50vh' }}>
            <Container maxWidth='lg'>
                <Box marginTop={30}>
                    <Typography variant="h3" align="center"><b>{uni_name}</b>の授業評定を見る</Typography>
                </Box>
                <Box justifyContent={'center'} display='flex' marginTop={15}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={uni.colleges}
                        sx={{ width: 300 }}
                        renderInput={(params: TextFieldProps) => <TextField {...params} label="学部名" />}
                    />
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

type Option = {
    id: number
    label: string
    slug: string
    colleges: string[]
}
const getUniversity = () => {
    const options: Option[] = [
        { id: 1, label: '東京大学', slug: 'utokyo', colleges: ['理学部', '工学部'] },
        { id: 2, label: '慶應義塾大学', slug: 'keio', colleges: ['理工学部', '経済学部'] }
    ]
    return options
}