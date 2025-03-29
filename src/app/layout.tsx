import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Header } from '@/widgets/header'

import '../shared/styles/globals.scss'

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'GWL DEVELOPMENT',
    description: 'GWL DEVELOPMENT',
}

interface Props {
    children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="ru">
            <body className={`${montserrat.className}`}>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
