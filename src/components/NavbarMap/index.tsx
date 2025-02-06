import Link from "next/link";
import Image from "next/image";
import NavItem from "../NavItem";
import { NavItemIterface } from "@/Interfaces/I_NavItem";

const items: NavItemIterface[] = [
    { url: "/", label: "ìnicio" },
    { url: "/produto", label: "Produtos" },
    { url: "/sobre", label: "Sobre" },
    { url: "/contato", label: "Contato" },
]

export default function NavbarMap(){
    return(
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src="" width={60} 
                    height={45} alt="logo" />
                </Link>

                <ul className="nav-items">
                    <li className="nav-item">
                        {items.map(( item ) => (
                           <NavItem 
                                key={item.label} 
                                url={item.url} 
                                label={item.label}
                            /> 
                        ))}
                    </li>
                </ul>

                <button></button>
            </nav>
        </header>
    )
}