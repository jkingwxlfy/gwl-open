'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import './navlink.scss'

interface INavLinkProps {
    href: string
    children: React.ReactNode
}

const NavLink: React.FC<INavLinkProps> = ({ href, children }) => {
    const pathname = usePathname()

    const isActive = pathname.startsWith(href)

    return (
        <Link className={`nav-link ${isActive ? 'active' : ''}`} href={href}>
            {children}
        </Link>
    )
}

export default NavLink
