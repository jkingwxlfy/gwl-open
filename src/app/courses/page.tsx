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
                                Этот раздел вкратце рассматривает общие
                                положения таможенного законодательства и ведения
                                внешнеэкономической деятельности. Особое
                                внимание здесь уделяется нюансам правильного
                                оформления договоров ВЭД, изучив которые каждый
                                сможет заключить наиболее выгодное и безопасное
                                для себя или своей компании соглашение о
                                внешнеэкономической деятельности.
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
                                В этом разделе вы научитесь мастерски
                                ориентироваться в Едином Таможенном Тарифе и ТН
                                ВЭД, что позволит безошибочно определять
                                налогооблагаемую базу для любого вида товаров и
                                всегда эффективно отстаивать свои права при
                                таможенной очистке груза. Это гарантированно
                                защитит вас и вашу компанию от лишних расходов и
                                бюрократических проволочек!
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
                                Как уже говорилось выше, взаимодействие с
                                таможенными органами часто связано со стрессом.
                                Зачастую когда сотрудник таможни сообщает
                                декларанту о проблемах с грузом, последний
                                начинает нервничать и опасаться штрафных
                                санкций, а потому порой не может твердо доказать
                                свою правоту, хотя знает, как это сделать.{' '}
                                <br /> <br /> В этом разделе наши опытные
                                сотрудники расскажут, когда и как им удавалось
                                успешно разрешать конфликты с таможенными
                                органами в пользу клиентов, несмотря на высокий
                                уровень психологического напряжения и сжатые
                                сроки. После этого раздела вы больше никогда не
                                будете опасаться таможенных органов и всегда
                                сможете найти решение!
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
                                Если человек не знает, как правильно заполнять
                                грузовую таможенную декларацию, его просто не
                                возьмут на работу, связанную с растаможкой
                                грузов. В этом разделе мы максимально подробно
                                рассмотрим и изучим каждый пункт таможенной
                                декларации и его значение с точки зрения
                                таможенного законодательства, включая
                                “проблемные” элементы и распространенные ошибки,
                                из-за которых можно попасть впросак. Интенсивная
                                практическая часть раздела будет включать в себя
                                упражнения по правильному заполнению таможенной
                                декларации с использованием специальной
                                программы. Имея эти знания, вы больше не будете
                                сомневаться в том, что указывать в декларации, а
                                также гарантированно сможете защитить свои
                                интересы в любом споре с таможенными органами!
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
