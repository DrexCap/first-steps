
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'SEO Title',
    keywords: ['Contact Page', 'Luis', 'Información']
}

export default function ContactPage() {
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    )
}