'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { slides } from '../../model/slides'
import useIsMobile from '@/hooks/useIsMobile'
import { useRouter } from 'next/navigation'

import styles from './HeroSectionSliderMobile.module.scss'

const HeroSectionSliderMobile: React.FC = () => {
    const [activeSlider, setActiveSlider] = useState<number>(0)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()
    const isMobile = useIsMobile()

    if (!isMobile) {
        return null
    }

    const handleScroll = () => {
        if (innerRef.current) {
            const scrollLeft = innerRef.current.scrollLeft
            const slideWidth = innerRef.current.clientWidth

            // Вычисляем индекс текущего слайда
            const newIndex = Math.round(scrollLeft / slideWidth)
            setActiveSlider(newIndex)
        }
    }

    const handleNavClick = (index: number) => {
        setActiveSlider(index)

        if (innerRef.current) {
            const slideWidth = innerRef.current.clientWidth
            innerRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className={styles.slider}>
            <article className={styles.card}>
                <div className={styles.outer}>
                    <div className={styles.nav}>
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavClick(index)}
                                className={cn({
                                    [styles.active]: index === activeSlider,
                                })}
                            />
                        ))}
                    </div>
                    <section
                        className={styles.inner}
                        ref={innerRef}
                        onScroll={handleScroll}
                    >
                        {slides.map((item, index) => (
                            <Image
                                key={index}
                                src={item.image}
                                alt=''
                                className={styles.slide}
                                id={`slide${index}`}
                                onClick={() => router.push(item.refer)}
                            />
                        ))}
                    </section>
                </div>
                <h1 className={styles.title}>
                    {slides.map((item, index) =>
                        index === activeSlider ? item.title : null,
                    )}
                </h1>
            </article>
        </section>
    )
}
export default HeroSectionSliderMobile
