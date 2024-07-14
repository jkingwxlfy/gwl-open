import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

import arrow from '@/assets/whitearrowright.png'
import background from '@/assets/bg404.png'
import promo from '@/assets/promo404.png'
import './not-found.scss'

export const metadata: Metadata = {
    title: 'Страница не найдена',
    description: 'К сожалению, такой страницы не существует',
    keywords: [
        'Страница не найдена',
        'Ошибка 404',
        'Такой страницы не существует',
        'Страница не найдена GWL Group',
        '404 GWL Group',
        'Перейти на главную GWL Group',
        'Страница не найдена сайт GWL Group',
        'Как вернуться на главную GWL Group',
        '404 ошибка GWL Group',
        'Как исправить ошибку 404 на сайте GWL Group',
        'Как найти потерянную страницу GWL Group',
        'Ошибка 404 GWL Group',
        'Как найти потерянную страницу на сайте GWL Group',
        'Ошибка 404 страница не найдена GWL Group',
        'Как исправить 404 ошибку на сайте GWL Group',
    ],
}

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
