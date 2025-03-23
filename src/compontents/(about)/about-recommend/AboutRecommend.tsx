'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Slider from '@/compontents/slider/Slider'
import Link from 'next/link'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { useState, useRef } from 'react'

import styles from './AboutRecommend.module.scss'

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
import sliderArrowLeft from './solar_round-alt-arrow-left-bold.svg'
import sliderArrowRight from './solar_round-alt-arrow-right-bold.svg'
import toogwldocfull from './docs/toogwl.png'
import naufdocfull from './docs/knauf.png'
import nauflogo from './docs/knauflogo.png'
import delavaldocfull from './docs/delaval.png'
import delavallogo from './docs/delavallogo.png'
import avistodocfull from './docs/avisto.png'
import avistologo from './docs/avistotradelogo.png'

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
    {
        id: 5,
        document: toogwldocfull,
        fullDoc: toogwldocfull,
        logo: beeline,
        alt: '',
        altDoc: '',
    },
    {
        id: 6,
        document: naufdocfull,
        fullDoc: naufdocfull,
        logo: nauflogo,
        alt: '',
        altDoc: '',
    },
    {
        id: 7,
        document: delavaldocfull,
        fullDoc: delavaldocfull,
        logo: delavallogo,
        alt: '',
        altDoc: '',
    },
    {
        id: 8,
        document: avistodocfull,
        fullDoc: avistodocfull,
        logo: avistologo,
        alt: '',
        altDoc: '',
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
    {
        id: 5,
        document: toogwldocfull,
        fullDoc: toogwldocfull,
        logo: beeline,
        alt: '',
        altDoc: '',
    },
    {
        id: 6,
        document: naufdocfull,
        fullDoc: naufdocfull,
        logo: nauflogo,
        alt: '',
        altDoc: '',
    },
    {
        id: 7,
        document: delavaldocfull,
        fullDoc: delavaldocfull,
        logo: delavallogo,
        alt: '',
        altDoc: '',
    },
    {
        id: 8,
        document: avistodocfull,
        fullDoc: avistodocfull,
        logo: avistologo,
        alt: '',
        altDoc: '',
    },
]

const AboutRecommend: React.FC = () => {
    const isMobile = useIsMobile()
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [startX, setStartX] = useState<number>(0)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const sliderRef = useRef<HTMLDivElement | null>(null)

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return

        setIsMouseDown(true)

        setStartX(event.pageX - sliderRef.current.offsetLeft)

        setScrollLeft(sliderRef.current.scrollLeft)
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseDown(false)
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || !sliderRef.current) return
        event.preventDefault()
        const x = event.pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 2

        sliderRef.current.scrollLeft = scrollLeft - walk
    }

    return (
        <>
            {isMobile ? (
                <>
                    <div className='about-page__recommend-title'>
                        Нас рекомендуют :
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
                                <Link
                                    target='_blank'
                                    href={item.fullDoc.src}
                                    onClick={e => {
                                        if (isMouseDown) e.preventDefault()
                                    }}
                                >
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
                    <div className={styles.slider}>
                        <Image
                            src={sliderArrowLeft}
                            alt={''}
                            onClick={() => {
                                if (sliderRef.current) {
                                    sliderRef.current?.scrollTo({
                                        left: 0,
                                        behavior: 'smooth',
                                    })
                                }
                            }}
                        />
                        <div
                            className={styles.outerWrapper}
                            ref={sliderRef}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='about-page__recommend-wrapper'>
                                {recommendListItems.map(item => (
                                    <div
                                        className='about-page__recommend-item'
                                        key={item.id}
                                    >
                                        <Link
                                            href={item.fullDoc.src}
                                            target='_blank'
                                            draggable={false}
                                        >
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
                        </div>
                        <Image
                            src={sliderArrowRight}
                            alt={''}
                            onClick={() => {
                                if (sliderRef.current) {
                                    sliderRef.current?.scrollTo({
                                        left: sliderRef.current.scrollWidth,
                                        behavior: 'smooth',
                                    })
                                }
                            }}
                        />
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
