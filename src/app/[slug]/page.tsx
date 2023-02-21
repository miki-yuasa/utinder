'use client'
import { Navigation } from "@/features/navigation";


export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return (<main><Navigation /></main>)
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