'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { slides } from '../../model/slides'
import useIsMobile from '@/hooks/useIsMobile'
import { useRouter } from 'next/navigation'

import { Card } from '@/shared/ui'

import styles from './HeroSectionSlider.module.scss'

const HeroSectionSlider: React.FC = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return null
    }

    const [activeSlider, setActiveSlider] = useState<number>(0)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

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

    useEffect(() => {
        const interval = setInterval(() => {
            if (innerRef.current) {
                const slideWidth = innerRef.current.clientWidth

                setActiveSlider(prev => {
                    const nextIndex = prev === slides.length - 1 ? 0 : prev + 1

                    innerRef.current?.scrollTo({
                        left: slideWidth * nextIndex,
                        behavior: 'smooth',
                    })

                    return nextIndex
                })
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className={styles.slider}>
            <h1 className={styles.titleQ}>Новости :</h1>
            <Card className={styles.card}>
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
                    <div className={styles.inner} ref={innerRef}>
                        {slides.map((item, index) => (
                            <Image
                                key={index}
                                src={item.image}
                                alt=''
                                className={styles.slide}
                                onClick={() => router.push(item.refer)}
                            />
                        ))}
                    </div>
                </div>
                <h1 className={styles.title}>
                    {slides.map((item, index) =>
                        index === activeSlider ? item.title : null,
                    )}
                </h1>
            </Card>
        </section>
    )
}
export default HeroSectionSlider
