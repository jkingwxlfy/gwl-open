'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Slider from '@/compontents/slider/Slider'
import Link from 'next/link'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import beelinedoc from '@/assets/beelinerecdoc.png'
import beeline from '@/assets/beelinerec.png'
import lftdoc from '@/assets/lftrecdoc.png'
import lft from '@/assets/lftrec.png'
import frkdoc from '@/assets/frkrecdoc.png'
import frk from '@/assets/frkrec.png'
import qazaqdoc from '@/assets/qazaqrecdoc.png'
import qazaq from '@/assets/qazaqrec.png'
import beelinemobile from '@/assets/beelinemobile.png'
import lftmobile from '@/assets/lftmobile.png'
import frkmobile from '@/assets/frkmobile.png'
import qazomobile from '@/assets/qazaomobile.png'
import beelinedocfull from '@/assets/beelinedocfull.png'
import lftdocfull from '@/assets/lftdocfull.png'
import frkdocfull from '@/assets/frkdocfull.png'
import qazaqdocfull from '@/assets/qazaqdocfull.png'

interface IRecommendListItems {
    id: number
    document: StaticImageData
    fullDoc: StaticImageData
    logo: StaticImageData
    alt: string
    altDoc: string
}

const recommendListItems: IRecommendListItems[] = [
    {
        id: 1,
        document: beelinedoc,
        fullDoc: beelinedocfull,
        logo: beeline,
        alt: 'Изображение логотипа Билайн',
        altDoc: 'Изображение документа Билайн',
    },
    {
        id: 2,
        document: lftdoc,
        fullDoc: lftdocfull,
        logo: lft,
        alt: 'Изображение логотипа LFT',
        altDoc: 'Изображение документа LFT',
    },
    {
        id: 3,
        document: frkdoc,
        fullDoc: frkdocfull,
        logo: frk,
        alt: 'Изображение логотипа FRK',
        altDoc: 'Изображение документа FRK',
    },
    {
        id: 4,
        document: qazaqdoc,
        fullDoc: qazaqdocfull,
        logo: qazaq,
        alt: 'Изображение логотипа QAZAO',
        altDoc: 'Изображение документа QAZAO',
    },
]

const recommendListItemsMobile: IRecommendListItems[] = [
    {
        id: 1,
        document: beelinedoc,
        fullDoc: beelinedocfull,
        logo: beelinemobile,
        alt: 'Изображение логотипа Билайн ',
        altDoc: 'Изображение документа Билайн',
    },
    {
        id: 2,
        document: lftdoc,
        fullDoc: lftdocfull,
        logo: lftmobile,
        alt: 'Изображение логотипа LFT',
        altDoc: 'Изображение документа LFT',
    },
    {
        id: 3,
        document: frkdoc,
        fullDoc: frkdocfull,
        logo: frkmobile,
        alt: 'Изображение логотипа FRK',
        altDoc: 'Изображение документа FRK',
    },
    {
        id: 4,
        document: qazaqdoc,
        fullDoc: qazaqdocfull,
        logo: qazomobile,
        alt: 'Изображение логотипа QAZAO',
        altDoc: 'Изображение документа QAZAO',
    },
]

const AboutRecommend: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <>
                    <div className='about-page__recommend-title'>
                        Нас рекоммендуют :
                    </div>
                    <Slider
                        styles={{
                            inner: { gap: '40px', height: '245px' },
                            wrapper: { width: '300px' },
                            slider: { width: '190px', height: '245px' },
                        }}
                    >
                        {recommendListItemsMobile.map(item => (
                            <div
                                className='about-page__recommend-item'
                                key={item.id}
                            >
                                <Link target='_blank' href={item.fullDoc.src}>
                                    <Image
                                        className='about-page__recommend-doc'
                                        src={item.document}
                                        alt={item.altDoc}
                                    />
                                </Link>
                                <Image
                                    className='about-page__recommend-logo'
                                    src={item.logo}
                                    alt={item.alt}
                                />
                            </div>
                        ))}
                    </Slider>
                    {/* <button className='about-page__recommend-button'>
                                Смотреть все
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </button> */}
                </>
            ) : (
                <>
                    <div className='about-page__recommend-title'>
                        Нас рекомендуют :
                    </div>
                    <div className='about-page__recommend-wrapper'>
                        {recommendListItems.map(item => (
                            <div
                                className='about-page__recommend-item'
                                key={item.id}
                            >
                                <Link target='_blank' href={item.fullDoc.src}>
                                    <Image
                                        className='about-page__recommend-doc'
                                        src={item.document}
                                        alt={item.altDoc}
                                    />
                                </Link>
                                <Image
                                    className='about-page__recommend-logo'
                                    src={item.logo}
                                    alt={item.alt}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <button className='about-page__recommend-button'>
                                Смотреть все
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </button> */}
                </>
            )}
        </>
    )
}
export default AboutRecommend
