import Link from 'next/link'
import { headerLinks } from '../model/config'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <nav aria-label="Главная навигация">
                    <ul>
                        {headerLinks.map((link) => (
                            <li key={link.path}>
                                <Link href={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
