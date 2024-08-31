/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import HomeDecor from '@/compontents/(home)/home-decor/HomeDecor'
import HomeCompanies from '@/compontents/(home)/home-companies/HomeCompanies'
import HomeCourses from '@/compontents/(home)/home-courses/HomeCourses'
import HomeNews from '@/compontents/(home)/home-news/HomeNews'
import ContactsBorder from '@/compontents/contacts-border/ContactsBorder'

import promoImage from '@/assets/main-promo.png'
import greenArrowRight from '@/assets/green-arrow-right.png'
import whiteArrowRight from '@/assets/whitearrowright.png'
import instagram from '@/assets/instagram icon.png'
import years12 from '@/assets/12years.png'

import whatsapp from '@/assets/whatsappicon-trans.png'
import './app.scss'

export const metadata: Metadata = {
    title: 'GWL Group - Лучший таможенный брокер | представитель в Казахстане - Алматы',
    description: `Компания GWL Group - опытный брокер
    в области внешнеэкономической деятельности на
    рынке РК, внесенный в официальный Казахстанский
    реестр представителей в данной сфере. Мы
    предоставляем услуги по оформлению грузов, их
    хранению и транспортировке. Мы
    помогаем казахстанским компаниям эффективно
    осуществлять импортно-экспортные операции,
    начиная с подготовки необходимых документов и
    заканчивая транспортировкой груза в место
    назначения. Оптимизируем финансовые затраты и
    сокращаем время оформления товаров.`,
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
    ],
}

const App: React.FC = () => {
    return (
        <section className='app'>
            <div
                className='app__promo'
                style={{ backgroundImage: `url(${promoImage.src})` }}
            >
                <div className='app__promo__container'>
                    <div className='app__wrapper'>
                        <div className='app__info'>
                            <h1 className='app__title'>GWL GROUP</h1>
                            <h2 className='app__pretitle'>
                                Лучший Таможенный представитель
                            </h2>
                            <div className='app__description'>
                                в Республике Казахстан, который расширит границы
                                Вашего бизнеса до международного уровня!
                            </div>
                        </div>
                        <div>
                            <div className='app__predescr'>
                                более 12 успешных лет решения задач любых
                                сложностей наших клиентов
                            </div>
                            <Link className='app__button' href='/contacts'>
                                Связаться с нами{' '}
                                <Image
                                    src={greenArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </Link>
                            <div className='app__contacts'>
                                <div className='app__contacts-number'>
                                    +7 (727) 367 16 67
                                </div>
                                <div className='app__contacts-wrapper'>
                                    <div className='app__contacts-email'>
                                        gwl_group@inbox.ru
                                    </div>
                                    <div className='app__contacts-links'>
                                        <Link
                                            href='https://www.instagram.com/gwlgroup/'
                                            className='app__promo-contacts__item'
                                        >
                                            <Image
                                                src={instagram}
                                                alt='Иконка инстаграмма'
                                                className='app__contacts-image'
                                            />
                                        </Link>
                                        <Link
                                            href='https://wa.me/77077267526'
                                            className='app__promo-contacts__item'
                                        >
                                            <Image
                                                src={whatsapp}
                                                alt='Иконка инстаграмма'
                                                className='app__contacts-image'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app__about'>
                <div className='app__about__container'>
                    <div className='app__about-title'>
                        <span>Почему мы?</span>
                        <Link href='/about'>
                            О компании{' '}
                            <Image
                                src={greenArrowRight}
                                alt='Изображение ссылки'
                            />
                        </Link>
                    </div>

                    <div className='app__about-description'>
                        <div
                            className='app__about-description__image'
                            style={{ backgroundImage: `url(${years12.src})` }}
                        >
                            <div className='app__about-description__image-wrapper'>
                                <div className='app__about-description__image-count'>
                                    12
                                </div>
                                <div className='app__about-description__image-title'>
                                    Успешных лет на рынке
                                </div>
                            </div>
                        </div>

                        <div className='app__about-description__info'>
                            <div className='app__about-description__info-title'>
                                GWL GROUP
                            </div>
                            <div className='app__about-description__info-text'>
                                <span>Компания GWL Group</span> - опытный брокер
                                в области внешнеэкономической деятельности на
                                рынке РК, внесенный в официальный Казахстанский
                                реестр представителей в данной сфере. Мы
                                предоставляем услуги по оформлению грузов, их
                                хранению и транспортировке. <br /> <br /> Мы
                                помогаем казахстанским компаниям эффективно
                                осуществлять импортно-экспортные операции,
                                начиная с подготовки необходимых документов и
                                заканчивая транспортировкой груза в место
                                назначения. Оптимизируем финансовые затраты и
                                сокращаем время оформления товаров.
                            </div>
                            <Link href='/contacts'>
                                Связаться с нами{' '}
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app__decor'>
                <div className='app__decor__container'>
                    <HomeDecor />
                </div>
            </div>

            <div className='app__course'>
                <div className='app__course__container'>
                    <HomeCourses />
                </div>
            </div>

            <ContactsBorder />

            <div className='app__trust'>
                <div className='app__trust__container'>
                    <div className='app__trust-title'>Нам доверяют : </div>
                    <div className='app__trust-companies'>
                        <HomeCompanies />
                    </div>
                </div>
            </div>

            <div className='app__news'>
                <div className='app__news__container'>
                    <div className='app__news-title'>Таможенные новости РК</div>
                    <HomeNews />
                </div>
            </div>
        </section>
    )
}
export default App
