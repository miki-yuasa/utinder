'use client'
import { Autocomplete } from "@/components/Autocomplete/Autocomplete";
import { Box } from "@/components/Box/Box";
import { Container } from "@/components/Container/Container";
import { Footer } from "@/components/Footer/Footer";
import { TextField, TextFieldProps } from "@/components/TextField/TextField";
import { Typography } from "@/components/Typography/Typography";
import { db, getColleges } from "@/features/database";
import { Navigation } from "@/features/navigation";
import { Firestore } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

const options: Option[] = [
    { id: 1, label: '東京大学', slug: 'utokyo', colleges: ['理学部', '工学部'] },
    { id: 2, label: '慶應義塾大学', slug: 'keio', colleges: ['理工学部', '経済学部'] }
]

export default function UniPage({ params }: { params: { uni_url: string } }) {
    const options: Option[] = getUniversity();
    const { uni_url } = params;

    let unis = options.filter(option => option.slug === uni_url)
    const defaultUni = options[0]
    unis.push(defaultUni)

    const uni = unis[0]
    const uni_name: string = uni.label
    const collegeOptions: string[] = uni.colleges

    const [collegeState, setState] = useState();

    useEffect(() => {
        const access_db = async (db: Firestore) => {
            const colleges = await getColleges(db)
            setState(colleges)
        };
        access_db(db)
    }, []);

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
                        options={collegeOptions}
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
        uni_url: uni.slug,
    }));
}

type Option = {
    id: number
    label: string
    slug: string
    colleges: string[]
}
const getUniversity = () => {

    return options
}