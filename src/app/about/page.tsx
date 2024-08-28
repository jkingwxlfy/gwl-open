import Image from 'next/image'
import type { Metadata } from 'next'

import ContactsBorder from '@/compontents/contacts-border/ContactsBorder'
import AboutOp from '@/compontents/(about)/about-op/AboutOp'
import AboutExp from '@/compontents/(about)/about-exp/AboutExp'
import AboutRecommend from '@/compontents/(about)/about-recommend/AboutRecommend'
import Card from '@/compontents/card/Card'

import aboutPromo from '@/assets/aboutpromo.png'
import truck from '@/assets/redtruck.png'
import cardsbg from '@/assets/cardsbg.png'
import card1 from '@/assets/card1.png'
import card2 from '@/assets/card2.png'
import card3 from '@/assets/card3.png'
import oppromo from '@/assets/oppromo.png'

import './about.scss'

export const metadata: Metadata = {
    title: 'О компании',
    keywords: [
        'Зеленый Свет ВЭД',
        'GWL GROUP',
        'Таможенный представитель Казахстан',
        'Таможенные услуги',
        'Таможенное оформление',
        'Внешнеэкономическая деятельность Казахстан',
        'Растаможка груза Казахстан',
        'Таможенное право',
        'Логистика Казахстан',
        'Таможенные услуги Алматы',
        'Быстрое таможенное оформление',
        'Надежные таможенные услуги',
        'Экономия на таможенных услугах',
        'Таможенный брокер Казахстан',
        'Импорт и экспорт Казахстан',
    ],
    description: 'О компании GWL GROUP',
}

const AboutPage: React.FC = () => {
    return (
        <section className='about-page'>
            <div
                className='about-page__promo'
                style={{ backgroundImage: `url(${aboutPromo.src})` }}
            >
                <div className='about-page__promo__container'>
                    <h1 className='about-page__promo-title'>
                        о компании TOO <br /> <span>”GWL GROUP”</span>{' '}
                    </h1>
                    <h2 className='about-page__promo-pretitle'>
                        лучший таможенный представитель в Республике Казахстан!
                    </h2>
                </div>
            </div>

            <div className='about-page__description'>
                <div className='about-page__description__container'>
                    <div className='about-page__description-info'>
                        <div className='about-page__description-wrapper'>
                            <div className='about-page__description-title'>
                                Зеленый Свет <br /> <span>ВЭД!</span>
                            </div>
                            <div className='about-page__description-text'>
                                Наша миссия - давать <span>“зеленый свет”</span>{' '}
                                <br />
                                внешнеэкономической деятельности в Казахстане,
                                помогая предпринимателям расширять границы
                                своего бизнеса за рубеж и максимально упрощая
                                для них процесс растаможки груза и контакта с
                                таможенными органами.
                            </div>
                            <div className='about-page__description-text'>
                                Наши услуги очень финансово выгодны, ведь они
                                дешевле, чем оклад среднего штатного логиста, а
                                наша команда — это высококвалифицированные
                                знатоки внешнеэкономического права.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-page__description__truck'>
                    <div className='about-page__description__truck-wrapper'>
                        <Image src={truck} alt='Изображение грузовика' />
                    </div>
                </div>
            </div>

            <div
                className='about-page__cards'
                style={{ backgroundImage: `url(${cardsbg.src})` }}
            >
                <div className='about-page__cards__container'>
                    <div className='about-page__cards-list'>
                        <Card
                            image={card1}
                            title='Экономия Времени'
                            text='С нами быстрее и удобнее! Вы получите свой груз
                                в кратчайшие сроки без проблем с таможней!'
                        />
                        <Card
                            image={card2}
                            title='Безопасность'
                            text='С нами вы застрахованы от юридических притязаний
                            таможенных органов!'
                        />
                        <Card
                            image={card3}
                            title='Экономия'
                            text='Стоимость услуг таможенного представителя ниже,
                            чем оклад штатного специалиста!'
                        />
                    </div>
                </div>
            </div>

            <div className='about-page__exp'>
                <div className='about-page__exp__container'>
                    <AboutExp />
                </div>
            </div>

            <div
                className='about-page__opp-promo'
                style={{ backgroundImage: `url(${oppromo.src})` }}
            >
                <div className='about-page__opp-promo__container'>
                    <div className='about-page__opp-promo__wrapper'>
                        <div className='about-page__opp-promo__title'>
                            Чем мы можем <br /> <span>вам помочь?</span>
                        </div>
                        <div className='about-page__opp-promo__text'>
                            Мы окажем вам всестороннюю помощь во всех аспектах
                            таможенного оформления, а именно:
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-page__opp'>
                <div className='about-page__opp__container'>
                    <AboutOp />
                </div>
            </div>

            <ContactsBorder />

            <div className='about-page__recommend'>
                <div className='about-page__recommend__container'>
                    <AboutRecommend />
                </div>
            </div>
        </section>
    )
}
export default AboutPage
