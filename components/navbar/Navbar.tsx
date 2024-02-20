import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components";

const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/about", text: "About2" }
]

// TODO esto es un serverComponent
export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded-lg">
            {/* El "Link" evita que la pagina se renderice de nuevo */}
            <Link href="/" className="flex items-center">
                <HomeIcon className="mr-2"/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} {...navItem}/>
                ))
            }
        </nav>
    )
}

