
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
    keywords: ['About Page', 'Andre', 'Información']
}

export default function AboutPage() {
    return (
        <>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola Mundo</span>
                <span className="text-7xl">About Pages</span>
            </main>
        </>
    )
}