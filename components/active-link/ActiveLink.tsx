'use client';
import Link from "next/link";
import style from "./ActiveLink.module.css";// Para importar los estilos debe estar el .module.css
import {usePathname} from "next/navigation";

interface Props {
    path: string,
    text?: string
}

export const ActiveLink = ({path, text}: Props) => {

    const pathName = usePathname();

    // usamos los "[]" para llamar una clase de css separada por guion
    return (
        <Link
            className={`${ (pathName === path) && style['active-link']} ${style.link}`}
            href={path}
        >
            {text}
        </Link>
    );
};

