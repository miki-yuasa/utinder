export type MetaProps = {
    title?: string
    description?: string
    charSet?: string
    ogTitle?: string
    ogDescription?: string
    ogType?: string
    ogUrl?: string
    ogImage?: string
    ogSiteName?: string
    ogLocale?: string
};

export type University = {
    label: string
    url: string
    colleges: College[]
}

export type College = {
    label: string
    name: string
}