import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <Link href="/">
                    <img src="./images/Logo.png" width={60} 
                    height={45} alt="logo" />
                </Link>

                <ul className="nav-items">
                    <li className="nav-item">
                        <Link href="/">
                            ìnicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            Produtos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            Sobre
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}