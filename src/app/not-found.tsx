'use client'
import Link from 'next/link'
import Image from 'next/image'

import arrow from '@/assets/whitearrowright.png'
import background from '@/assets/bg404.png'
import promo from '@/assets/promo404.png'
import './not-found.scss'

const NotFound: React.FC = () => {
    return (
        <section className='not-found'>
            <div
                className='not-found__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            />

            <div className='not-found__main'>
                <div
                    className='not-found__wrapper'
                    style={{ backgroundImage: `url(${background.src})` }}
                >
                    <div className='not-found__container'>
                        <div className='not-found__code'>404</div>
                        <h1>К сожалению, такой страницы не существует</h1>
                        <Link href='/'>
                            Перейти на Главную Страницу
                            <Image src={arrow} alt='Стрелка вправо' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NotFound
