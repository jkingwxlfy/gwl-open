'use client'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'

import ContactsBorder from '@/compontents/contacts-border/ContactsBorder'
import Slider from '@/compontents/slider/Slider'
import Card from '@/compontents/card/Card'

import aboutPromo from '@/assets/aboutpromo.png'
import truck from '@/assets/redtruck.png'
import cardsbg from '@/assets/cardsbg.png'
import card1 from '@/assets/card1.png'
import card2 from '@/assets/card2.png'
import card3 from '@/assets/card3.png'
import exp1 from '@/assets/exp1.png'
import exp2 from '@/assets/exp2.png'
import exp3 from '@/assets/exp3.png'
import oppromo from '@/assets/oppromo.png'
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
import './about.scss'

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

const AboutPage: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <section className='about-page'>
            <div
                className='about-page__promo'
                style={{ backgroundImage: `url(${aboutPromo.src})` }}
            >
                <div className='about-page__promo__container'>
                    <div className='about-page__promo-title'>
                        о компании TOO <br /> <span>”GWL GROUP”</span>{' '}
                    </div>
                    <div className='about-page__promo-pretitle'>
                        лучший таможенный представитель в Республике Казахстан!
                    </div>
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
                                наша команда - это высококвалифицированные
                                знатоки таможенного права.
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
                    {isMobile ? (
                        <>
                            <div className='about-page__exp-title'>
                                На рынке РК <br /> <span>12 лет</span>
                            </div>
                            <Image
                                className='about-page__exp-info1__image'
                                src={exp1}
                                alt='Фотография сотрудника'
                            />
                            <div className='about-page__exp-info1'>
                                <div className='about-page__exp-info1__text'>
                                    Наша компания имеет более чем 12-летний опыт
                                    в сфере таможенного оформления и
                                    предоставляет высококачественные услуги
                                    компаниям различных отраслей. <br /> <br />{' '}
                                    Мы гордимся нашей репутацией как
                                    профессиональных и надежных экспертов в
                                    области таможенного оформления. <br />{' '}
                                    <br /> Наша команда специалистов обладает
                                    глубокими знаниями и опытом, чтобы помочь
                                    вам преодолеть любые таможенные вызовы и
                                    обеспечить бесперебойный поток вашего
                                    бизнеса.
                                </div>
                            </div>

                            <div className='about-page__exp-info2'>
                                <Image
                                    className='about-page__exp-info2__image'
                                    src={exp2}
                                    alt='Фотография сотрудника'
                                />
                            </div>
                            <div className='about-page__exp-info2__text'>
                                <div className='about-page__exp-info2__pointer' />
                                В течение нашего 12-летнего пути мы стремились к
                                инновациям и совершенствованию наших услуг,
                                чтобы соответствовать всем Вашим потребностям в
                                сфере таможенного регулирования. Мы ценим
                                каждого клиента и гарантируем индивидуальный
                                подход к решению ваших задач.
                            </div>
                            <div className='about-page__exp-info3'>
                                <Image
                                    className='about-page__exp-info3__image'
                                    src={exp3}
                                    alt='Фотография сотрудника'
                                />
                            </div>
                            <div className='about-page__exp-info3__text'>
                                <div className='about-page__exp-info3__pointer' />
                                Позвольте нам стать Вашим надежным партнером в
                                таможенных вопросах и обеспечить вашему бизнесу
                                успешное развитие на мировом рынке. Вместе с{' '}
                                <span>GWL Group</span> Вы можете быть уверены в
                                профессиональном подходе и надежной поддержке на
                                каждом этапе вашего пути.
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='about-page__exp-title'>
                                На рынке РК <br /> <span>12 лет</span>
                            </div>
                            <div className='about-page__exp-info1'>
                                <div className='about-page__exp-info1__text'>
                                    Наша компания имеет более чем 12-летний опыт
                                    в сфере таможенного оформления и
                                    предоставляет высококачественные услуги
                                    компаниям различных отраслей. <br /> <br />{' '}
                                    Мы гордимся нашей репутацией как
                                    профессиональных и надежных экспертов в
                                    области таможенного оформления. <br />{' '}
                                    <br /> Наша команда специалистов обладает
                                    глубокими знаниями и опытом, чтобы помочь
                                    вам преодолеть любые таможенные вызовы и
                                    обеспечить бесперебойный поток вашего
                                    бизнеса.
                                </div>
                                <Image
                                    className='about-page__exp-info1__image'
                                    src={exp1}
                                    alt='Фотография сотрудника'
                                />
                            </div>
                            <div className='about-page__exp-info2'>
                                <Image
                                    className='about-page__exp-info2__image'
                                    src={exp2}
                                    alt='Фотография сотрудника'
                                />
                                <div className='about-page__exp-info2__text'>
                                    <div className='about-page__exp-info2__pointer' />
                                    В течение нашего 12-летнего пути мы
                                    стремились к инновациям и совершенствованию
                                    наших услуг, чтобы соответствовать всем
                                    Вашим потребностям в сфере таможенного
                                    регулирования. Мы ценим каждого клиента и
                                    гарантируем индивидуальный подход к решению
                                    ваших задач.
                                </div>
                            </div>
                            <div className='about-page__exp-info3'>
                                <div className='about-page__exp-info3__text'>
                                    <div className='about-page__exp-info3__pointer' />
                                    Позвольте нам стать Вашим надежным партнером
                                    в таможенных вопросах и обеспечить вашему
                                    бизнесу успешное развитие на мировом рынке.
                                    Вместе с <span>GWL Group</span> Вы можете
                                    быть уверены в профессиональном подходе и
                                    надежной поддержке на каждом этапе вашего
                                    пути.
                                </div>
                                <Image
                                    className='about-page__exp-info3__image'
                                    src={exp3}
                                    alt='Фотография сотрудника'
                                />
                            </div>
                        </>
                    )}
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
                    {isMobile ? (
                        <>
                            <div className='about-page__opp-text'>
                                <div className='about-page__opp-text__pointer' />
                                <div className='about-page__opp-text__content'>
                                    Поможем грамотно составить{' '}
                                    <span>
                                        договор о внешнеэкономической
                                        деятельности
                                    </span>
                                    . Как и в любом договоре, в договоре ВЭД
                                    существует много нюансов, которые надо
                                    учитывать при его составлении. Все это
                                    поможет избежать лишних вопросов на таможне
                                    и в банке.
                                </div>
                            </div>
                            <div className='about-page__opp-text-right'>
                                <div className='about-page__opp-text__pointer-right' />
                                <div className='about-page__opp-text__content'>
                                    Корректно оформим{' '}
                                    <span>таможенную декларацию</span> на ваш
                                    товар. Мы экономим Ваше время и средства,
                                    избавляя от необходимости покупать
                                    дорогостоящее программное обеспечение для
                                    оформления таможенных деклараций, а также от
                                    необходимости вникать во все тонкости этого
                                    процесса.
                                </div>
                            </div>
                            <div className='about-page__opp-text'>
                                <div className='about-page__opp-text__pointer' />
                                <div className='about-page__opp-text__content'>
                                    <span>Проведем растаможку “под ключ”</span>.
                                    С момента оформления доверенности, мы
                                    выполним весь процесс растаможки груза - от
                                    подачи декларации до очистки и доставки
                                    груза непосредственно на склад клиента - с
                                    минимальным участием самого клиента. Вам
                                    останется только расписаться в получении!
                                </div>
                            </div>
                            <div className='about-page__opp-text-right'>
                                <div className='about-page__opp-text__pointer-right' />
                                <div className='about-page__opp-text__content'>
                                    <span>
                                        Поможем разрешить спор с таможенными
                                        органами.
                                    </span>{' '}
                                    Случается так, что у предпринимателя
                                    возникают проблемы с таможенными органами в
                                    процессе самостоятельной растаможки груза.
                                    Мы оперативно включимся в вашу ситуацию на
                                    любом этапе и окажем юридическую помощь в
                                    разрешении любой спорной ситуации. Мы всегда
                                    на вашей стороне!
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='about-page__opp-item__left'>
                                <div className='about-page__opp-item__left-text'>
                                    <div className='about-page__opp-item__left-pointer' />
                                    Поможем грамотно составить{' '}
                                    <span>
                                        договор о внешнеэкономической
                                        деятельности
                                    </span>
                                    . Как и в любом договоре, в договоре ВЭД
                                    существует много нюансов, которые надо
                                    учитывать при его составлении. Все это
                                    поможет избежать лишних вопросов на таможне
                                    и в банке.
                                </div>
                            </div>
                            <div className='about-page__opp-item__right'>
                                <div className='about-page__opp-item__right-text'>
                                    <div className='about-page__opp-item__right-pointer' />
                                    Корректно оформим{' '}
                                    <span>таможенную декларацию</span> на ваш
                                    товар. Мы экономим Ваше время и средства,
                                    избавляя от необходимости покупать
                                    дорогостоящее программное обеспечение для
                                    оформления таможенных деклараций, а также от
                                    необходимости вникать во все тонкости этого
                                    процесса.
                                </div>
                            </div>
                            <div className='about-page__opp-item__left'>
                                <div className='about-page__opp-item__left-text'>
                                    <div className='about-page__opp-item__left-pointer' />
                                    <span>Проведем растаможку “под ключ”</span>.
                                    С момента оформления доверенности, мы
                                    выполним весь процесс растаможки груза - от
                                    подачи декларации до очистки и доставки
                                    груза непосредственно на склад клиента - с
                                    минимальным участием самого клиента. Вам
                                    останется только расписаться в получении!
                                </div>
                            </div>
                            <div className='about-page__opp-item__right'>
                                <div className='about-page__opp-item__right-text'>
                                    <div className='about-page__opp-item__right-pointer' />
                                    <span>
                                        Поможем разрешить спор с таможенными
                                        органами
                                    </span>
                                    . Случается так, что у предпринимателя
                                    возникают проблемы с таможенными органами в
                                    процессе самостоятельной растаможки груза.
                                    Мы оперативно включимся в вашу ситуацию на
                                    любом этапе и окажем юридическую помощь в
                                    разрешении любой спорной ситуации. Мы всегда
                                    на вашей стороне!
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ContactsBorder />

            <div className='about-page__recommend'>
                <div className='about-page__recommend__container'>
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
                                        <Link
                                            target='_blank'
                                            href={item.fullDoc.src}
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
                            <div className='about-page__recommend-wrapper'>
                                {recommendListItems.map(item => (
                                    <div
                                        className='about-page__recommend-item'
                                        key={item.id}
                                    >
                                        <Link
                                            target='_blank'
                                            href={item.fullDoc.src}
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
                            {/* <button className='about-page__recommend-button'>
                                Смотреть все
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </button> */}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default AboutPage
