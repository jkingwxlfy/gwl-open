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
    title: 'GWL Group',
    keywords: [
        'Зеленый Свет ВЭД',
        'GWL GROUP',
        'Таможенный представитель Казахстан',
        'Лучший Таможенный представитель',
        'Таможенные услуги',
        'Таможенное оформление',
        'Внешнеэкономическая деятельность Казахстан',
        'Растаможка груза Казахстан',
        'Таможенное право',
        'Логистика Казахстан',
        'Быстрое таможенное оформление',
        'Надежные таможенные услуги',
        'Экономия на таможенных услугах',
        'Таможенный брокер Казахстан',
        'Импорт и экспорт Казахстан',
        'Таможенные новости РК',
        'Транспортировка грузов',
        'Хранение грузов',
        'Казахстанский реестр таможенных представителей',
        'Оптимизация финансовых затрат',
        'Сокращение времени таможенного оформления',
        'Импортно-экспортные операции',
    ],
    description: 'GWL Group таможенный представитель в республике Казахстан',
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
