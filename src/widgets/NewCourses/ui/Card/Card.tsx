'use client'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'

import KurPorts from '@/assets/kurports2.png'
import flag from '@/assets/newflag.svg'
import bigFlag from '@/assets/NewFlagBig.png'

import styles from './Card.module.scss'

const Card: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <section className={styles.card}>
            <div className={styles.wrapper}>
                <Image
                    className={styles.image}
                    src={KurPorts}
                    alt='Курык Порты'
                />
                <div className={styles.flagIcon}>
                    <Image src={isMobile ? flag : bigFlag} alt='Новые курсы' />
                </div>
            </div>
        </section>
    )
}
export default Card
