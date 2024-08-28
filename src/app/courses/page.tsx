import type { Metadata } from 'next'

import CoursesStaff from '@/compontents/(courses)/courses-staff/CoursesStaff'
import CoursesInfo from '@/compontents/(courses)/courses-info/CoursesInfo'
import Card from '@/compontents/card/Card'

import promo from '@/assets/coursespromo.png'
import coursecardbg1 from '@/assets/coursecardbg1.png'
import coursecard1 from '@/assets/coursescard1.png'
import coursecard2 from '@/assets/coursescard2.png'
import coursecard3 from '@/assets/coursescard3.png'
import coursecardphose from '@/assets/cardphone.png'
import coursecardmedal from '@/assets/cardmedal.png'
import coursecardspeed from '@/assets/cardspeed.png'
import coursescardbg2 from '@/assets/coursescardbg2.png'

import './courses.scss'

export const metadata: Metadata = {
    title: 'Курсы',
    keywords: [
        'Школа таможенного брокера',
        'Курсы таможенного брокера',
        'Обучение таможенному делу',
        'Курсы таможенного оформителя',
        'Программа обучения таможне',
        'Школа таможенных брокеров Алматы',
        'Таможенное обучение GWL Group',
        'Курсы по таможенному делу',
        'Таможенное право курсы',
        'Обучение растаможке грузов',
        'Профессиональная подготовка таможенного брокера',
        'Таможенные курсы в Казахстане',
        'Программа обучения таможенному делу',
        'Курсы по растаможке грузов',
        'Школа таможенных брокеров GWL Group',
    ],
    description:
        'Школа Таможенного Брокера в Алматы от лучших специалистов компании',
}

const Courses: React.FC = () => {
    return (
        <section className='courses'>
            <div
                className='courses__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='courses__promo__container'>
                    <div className='courses__promo-wrapper'>
                        <h1 className='courses__promo-title'>
                            Школа Таможенного Брокера в Алматы
                        </h1>
                        <h2 className='courses__promo-description'>
                            от лучших специалистов компании{' '}
                            <span>“GWL Group”</span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className='courses__info'>
                <div className='courses__info__container'>
                    <CoursesInfo />
                </div>
            </div>

            <div
                className='courses__cards1'
                style={{ backgroundImage: `url(${coursecardbg1.src})` }}
            >
                <div className='courses__cards1__container'>
                    <div className='courses__cards1-wrapper'>
                        <Card
                            image={coursecard1}
                            title='Повышение Квалификации'
                            text='Любой юрист, брокер или же логистможет получить программу для повышения своей квалификации'
                        />
                        <Card
                            image={coursecard2}
                            title='Лучшие Преподаватели'
                            text='С нами вы застрахованы от юридических притязаний таможенных органов!'
                        />
                        <Card
                            image={coursecard3}
                            title='Эффективное обучение'
                            text='Мастерски обучим Вас главным тонкостям таможенного дела за короткий срок времени'
                        />
                    </div>
                </div>
            </div>

            <div className='courses__training'>
                <div className='courses__training__container'>
                    <div className='courses__training-title'>
                        Из чего состоит программа курса?
                    </div>
                    <div className='courses__training-wrapper'>
                        <div className='courses__training-item'>
                            <div className='courses__training-item__title-wrapper'>
                                <div className='courses__training-item__number'>
                                    1
                                </div>
                                <div className='courses__training-item__title'>
                                    Oбщие положения ТК РК и ВЭД
                                </div>
                            </div>
                            <div className='courses__training-item__description'>
                                Этот раздел кратко освещает основные аспекты
                                законодательства в сфере международной торговли
                                и ключевые моменты внешнеэкономической
                                деятельности. Особое внимание уделяется правилам
                                составления договоров для ВЭД, что позволяет
                                заключать наиболее выгодные и безопасные
                                соглашения как для компаний, так и для
                                индивидуальных предпринимателей.
                            </div>
                        </div>
                        <div className='courses__training-item-right'>
                            <div className='courses__training-item-right__title-wrapper'>
                                <div className='courses__training-item-right__title'>
                                    Правильное определение таможенной стоимости
                                </div>
                                <div className='courses__training-item-right__number'>
                                    2
                                </div>
                            </div>
                            <div className='courses__training-item-right__description'>
                                В этом разделе вы изучите основы использования
                                Единого Таможенного Тарифа и ТН ВЭД, что
                                позволит точно определять налогооблагаемую базу
                                для различных товаров и успешно защищать свои
                                интересы при прохождении процедур на границе.
                                Это поможет избежать дополнительных затрат и
                                минимизировать бюрократические препятствия,
                                обеспечив вашей компании уверенность и
                                безопасность в процессе оформления грузов.
                            </div>
                        </div>
                        <div className='courses__training-item'>
                            <div className='courses__training-item__title-wrapper'>
                                <div className='courses__training-item__number'>
                                    3
                                </div>
                                <div className='courses__training-item__title'>
                                    “Таможенная психология”
                                </div>
                            </div>
                            <div className='courses__training-item__description'>
                                Как уже отмечалось, взаимодействие с
                                контролирующими органами может быть стрессовым.
                                Часто при сообщении о проблемах с грузом
                                декларант испытывает тревогу и опасения штрафов,
                                что затрудняет доказательство своей правоты,
                                даже если он знает, как это сделать. <br />{' '}
                                <br /> В этом разделе наши специалисты поделятся
                                успешным опытом разрешения спорных ситуаций в
                                пользу клиентов, несмотря на стресс и
                                ограниченные сроки. После прохождения этого
                                модуля вы сможете уверенно находить решения и не
                                бояться взаимодействий с представителями власти!
                            </div>
                        </div>
                        <div className='courses__training-item-right'>
                            <div className='courses__training-item-right__title-wrapper'>
                                <div className='courses__training-item-right__title'>
                                    Правильное определение таможенной стоимости
                                </div>
                                <div className='courses__training-item-right__number'>
                                    4
                                </div>
                            </div>
                            <div className='courses__training-item-right__description'>
                                Если человек не умеет корректно заполнять
                                декларацию для таможенного оформления, его не
                                возьмут на работу, связанную с этой сферой. В
                                этом разделе мы детально разберем каждый пункт
                                декларации и его значение в рамках
                                законодательства, включая проблемные моменты и
                                типичные ошибки. Практическая часть курса
                                включает упражнения по заполнению декларации в
                                специализированной программе. С этими знаниями
                                вы будете уверены в том, что и как указывать, и
                                сможете успешно отстаивать свои права в любых
                                спорных ситуациях.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='courses__cards1'
                style={{ backgroundImage: `url(${coursescardbg2.src})` }}
            >
                <div className='courses__cards1__container'>
                    <div className='courses__cards1-wrapper'>
                        <Card
                            image={coursecardphose}
                            title='Бесплатные консультации'
                            text='В течении месяца мы индвидуально консультируем каждого нашего выпускника по любым вопросам'
                        />
                        <Card
                            image={coursecardmedal}
                            title='Сертификат об окончании'
                            text='По окончанию курса каждый выпускник получает уникальный сертификат'
                        />
                        <Card
                            image={coursecardspeed}
                            title='Короткий срок'
                            text='Продолжительность курса -
                            9 рабочих дней. Занятия проходят в рабочие дни с 17-00 до 20-00.'
                        />
                    </div>
                </div>
            </div>

            <div className='courses__staff'>
                <div className='courses__staff__container'>
                    <div className='courses__staff-title'>
                        Преподовательский состав
                    </div>
                    <div className='courses__staff-wrapper'>
                        <CoursesStaff />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Courses
