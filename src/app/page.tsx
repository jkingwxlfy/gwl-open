import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import HomeDecor from '@/compontents/(home)/home-decor/HomeDecor'
import HomeCompanies from '@/compontents/(home)/home-companies/HomeCompanies'
import HomeCourses from '@/compontents/(home)/home-courses/HomeCourses'
import HomeNews from '@/compontents/(home)/home-news/HomeNews'
import ContactsBorder from '@/compontents/contacts-border/ContactsBorder'
import { HeroSection, HeroSectionSliderMobile } from '@/widgets/HeroSection'

import greenArrowRight from '@/assets/green-arrow-right.png'
import whiteArrowRight from '@/assets/whitearrowright.png'

import years12 from '@/assets/12years.png'

import './app.scss'
import { LinkButton } from '@/shared/ui'

export const metadata: Metadata = {
    title: 'GWL Group - Лучший таможенный брокер | представитель в Казахстане - Алматы',
    description: `Компания GWL Group - опытный брокер
    в области внешнеэкономической деятельности на
    рынке РК, внесенный в официальный Казахстанский
    реестр представителей в данной сфере. Мы
    предоставляем услуги по оформлению грузов, их
    хранению и транспортировке.`,
}

const App: React.FC = () => {
    return (
        <section className='app'>
            <HeroSection />
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
                            <LinkButton
                                href='/contacts'
                                type='green'
                                mobileWidth={328}
                                width={300}
                            >
                                Связаться с нами{' '}
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>

            <HeroSectionSliderMobile />

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
