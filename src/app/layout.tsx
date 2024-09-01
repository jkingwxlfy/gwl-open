import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

import Header from '@/compontents/header/Header'
import Footer from '@/compontents/footer/Footer'
import WhatsApp from '@/compontents/whatsapp/WhatsApp'

import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://gwl.kz'),
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
            <Head>
                <meta
                    name='google-site-verification'
                    content='k7_UAJKcEI1lpmC5ws6HKuys6BY0AZevbnbvK8a7wSA'
                />
            </Head>
            <body className={montserrat.className}>
                <main className='container'>
                    <Header />
                    {children}
                    <Footer />
                    <WhatsApp />
                </main>
            </body>
        </html>
    )
}
