import { NavItemIterface } from "@/Interfaces/I_NavItem";
import Link from "next/link";

export default function NavItem({ url, label }: NavItemIterface) {
    return (
        <li className="nav-item">
            <Link href={url}>
                {label}
            </Link>
        </li>
    )
}