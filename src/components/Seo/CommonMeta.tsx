import { MetaProps } from "@/types"

const defaultMetaProps: MetaProps = {
    title: 'UTinder',
    description: "Rate your professors and check what others are thinking!",
    charSet: 'utf-8',
    ogTitle: 'UTinder',
    ogDescription: "Rate your professors and check what others are thinking!",
    ogType: 'website',
    ogUrl: 'https/utinder.github.io',
    ogImage: '/public/next.svg',
    ogSiteName: "UTinder",
    ogLocale: "ja_JP"
}

export const CommonMeta = (props: MetaProps = defaultMetaProps) => {
    return (<>
        <title>{props.title}</title>
        <meta name="descritpion" content={props.description} />
        <meta charSet={props.charSet} />
        <meta property="og:title" content={props.ogTitle} />
        <meta property="og:description" content={props.ogDescription} />
        <meta property="og:type" content={props.ogType} />
        <meta property="og:url" content={props.ogUrl} />
        <meta property="og:image" content={props.ogImage} />
        <meta property="og:site_name" content={props.ogSiteName} />
        <meta property="og:locale" content={props.ogLocale} />
    </>)
}
