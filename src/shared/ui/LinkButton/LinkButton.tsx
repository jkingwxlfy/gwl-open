'use client'
import Link from 'next/link'
import cn from 'classnames'
import useIsMobile from '@/hooks/useIsMobile'

import styles from './LinkButton.module.scss'

interface Props {
    children: React.ReactNode
    href: string
    type: 'white' | 'green'
    width?: number
    mobileWidth?: number
}

const LinkButton = ({
    children,
    href,
    type,
    width,
    mobileWidth,
}: Props): JSX.Element => {
    const isMobile = useIsMobile()
    const currentWidth =
        (isMobile ? `${mobileWidth}px` : `${width}px`) || '100%'

    return (
        <Link
            className={cn(styles.link, styles[type])}
            href={href}
            style={{ width: currentWidth }}
        >
            {children}
        </Link>
    )
}
export default LinkButton
