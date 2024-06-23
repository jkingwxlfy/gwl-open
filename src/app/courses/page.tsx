'use client'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'

import Card from '@/compontents/card/Card'

import promo from '@/assets/coursespromo.png'
import whiteArrowRight from '@/assets/whitearrowright.png'
import course from '@/assets/course.png'
import coursecardbg1 from '@/assets/coursecardbg1.png'
import coursecard1 from '@/assets/coursescard1.png'
import coursecard2 from '@/assets/coursescard1.png'
import coursecard3 from '@/assets/coursescard3.png'
import coursescardbg2 from '@/assets/coursescardbg2.png'
import person1 from '@/assets/coursesstaff1.png'
import person2 from '@/assets/coursesstaff2.png'
import person3 from '@/assets/coursesstaff3.png'
import './courses.scss'

const Courses: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <section className='courses'>
            <div
                className='courses__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='courses__promo__container'>
                    <div className='courses__promo-wrapper'>
                        <div className='courses__promo-title'>
                            Школа Таможенного Брокера в Алматы
                        </div>
                        <div className='courses__promo-description'>
                            от лучших специалистов компании{' '}
                            <span>“GWL Group”</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='courses__info'>
                <div className='courses__info__container'>
                    {isMobile ? (
                        <>
                            <div className='courses__info-title'>
                                Школа Таможенного Брокера
                            </div>
                            <div className='courses__info-image'>
                                <Image src={course} alt='Изображение коуча' />
                            </div>
                            <div className='courses__info-pretitle'>
                                <span>Специалист</span> по Таможенному
                                Декларированию
                            </div>
                            <div className='courses__info-description'>
                                Данный курс предназначен для работников
                                предприятий, занимающихся внешнеэкономической
                                деятельностью, приемом и поставкой грузов
                                зарубежным партнерам. В ходе курса участники
                                знакомятся с таможенным законодательством,
                                заполняют необходимые таможенные документы,
                                овладевают навыками взаимоотношений с
                                таможенными службами. <br /> <br /> Полученные
                                знания дают возможность самостоятельно, без
                                посредников, правильно совершать таможенные
                                операции, значительно ускорять этот пpoцecc,
                                заявлять таможенную стоимость и код ТН ВЭД, а
                                также грамотно рассчитывать необходимые
                                таможенные платежи. <br /> <br /> По окончании
                                курса ученики получают Сертификат. <br /> Курс
                                проходит в г. Алматы
                            </div>
                            <button className='courses__info-button'>
                                Записаться на курс
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </button>
                        </>
                    ) : (
                        <>
                            <div className='courses__info-title'>
                                Школа Таможенного Брокера
                            </div>
                            <div className='courses__info-wrapper'>
                                <div className='courses__info-text'>
                                    <div className='courses__info-pretitle'>
                                        <span>Специалист</span> по Таможенному
                                        Декларированию
                                    </div>
                                    <div className='courses__info-description'>
                                        Данный курс предназначен для работников
                                        предприятий, занимающихся
                                        внешнеэкономической деятельностью,
                                        приемом и поставкой грузов зарубежным
                                        партнерам. В ходе курса участники
                                        знакомятся с таможенным
                                        законодательством, заполняют необходимые
                                        таможенные документы, овладевают
                                        навыками взаимоотношений с таможенными
                                        службами. <br /> <br /> Полученные
                                        знания дают возможность самостоятельно,
                                        без посредников, правильно совершать
                                        таможенные операции, значительно
                                        ускорять этот пpoцecc, заявлять
                                        таможенную стоимость и код ТН ВЭД, а
                                        также грамотно рассчитывать необходимые
                                        таможенные платежи. <br /> <br /> По
                                        окончании курса ученики получают
                                        Сертификат. <br /> Курс проходит в г.
                                        Алматы
                                    </div>
                                    <button className='courses__info-button'>
                                        Записаться на курс
                                        <Image
                                            src={whiteArrowRight}
                                            alt='Изображение стрелки'
                                        />
                                    </button>
                                </div>
                                <div className='courses__info-image'>
                                    <Image
                                        src={course}
                                        alt='Изображение коуча'
                                    />
                                </div>
                            </div>
                        </>
                    )}
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
                            image={coursecard1}
                            title='Бесплатные консультации'
                            text='В течении месяца мы индвидуально консультируем каждого нашего выпускника по любым вопросам'
                        />
                        <Card
                            image={coursecard2}
                            title='Сертификат об окончании'
                            text='По окончанию курса каждый выпускник получает уникальный сертификат'
                        />
                        <Card
                            image={coursecard3}
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
                        {isMobile ? (
                            <>
                                <div className='courses__staff-person'>
                                    <div className='courses__staff-person__info'>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person1.src})`,
                                            }}
                                        />
                                        <div className='courses__staff-person__name'>
                                            Святобог Марина Борисовна
                                        </div>
                                    </div>
                                    <div className='courses__staff-person__description'>
                                        - является заместителем директора ТОО
                                        &quot;GWL group&quot; и ведущим
                                        специалистом компании по таможенному
                                        оформлению грузов и смежным
                                        процедурам.Проходила службу в таможенных
                                        органах СССР и Республики Казахстан, где
                                        начиная от рядового инспектора стала
                                        заместителем начальника Департамента
                                        таможенного контроля по
                                        Северо-Казахстанской области. Имеет
                                        звание подполковника таможенной службы.
                                    </div>
                                </div>
                                <div className='courses__staff-person'>
                                    <div className='courses__staff-person__info'>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person2.src})`,
                                                order: '2',
                                            }}
                                        />
                                        <div
                                            className='courses__staff-person__name'
                                            style={{ textAlign: 'right' }}
                                        >
                                            Тимур Султанович
                                        </div>
                                    </div>
                                    <div className='courses__staff-person__description'>
                                        - Эксперт таможенного дела.Проходил
                                        службу в таможенных органах СССР и
                                        Республики Казахстан. Имеет звание
                                        майора таможенной службы. В настоящее
                                        время работает в сфере услуг таможенного
                                        представителя.
                                    </div>
                                </div>
                                <div className='courses__staff-person'>
                                    <div className='courses__staff-person__info'>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person3.src})`,
                                            }}
                                        />
                                        <div className='courses__staff-person__name'>
                                            Ибраева Айдана Нурмухамбетвна
                                        </div>
                                    </div>
                                    <div className='courses__staff-person__description'>
                                        - сотрудник компании ТОО &quot;GWL
                                        Group&quot;, специалист-практик. Стаж
                                        работы в области таможенного оформления
                                        более 5 лет.
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='courses__staff-person'>
                                    <div>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person1.src})`,
                                            }}
                                        />
                                    </div>
                                    <div className='courses__staff-person__wrapper'>
                                        <div className='courses__staff-person__fullname'>
                                            Святобог Марина Борисовна
                                        </div>
                                        <div className='courses__staff-person__description'>
                                            Является заместителем директора ТОО
                                            &quot;GWL group&quot; и ведущим
                                            специалистом компании по таможенному
                                            оформлению грузов и смежным
                                            процедурам. <br /> Проходила службу
                                            в таможенных органах СССР и
                                            Республики Казахстан, где начиная от
                                            рядового инспектора стала
                                            заместителем начальника Департамента
                                            таможенного контроля по
                                            Северо-Казахстанской области. Имеет
                                            звание подполковника таможенной
                                            службы.
                                        </div>
                                    </div>
                                </div>

                                <div className='courses__staff-person'>
                                    <div className='courses__staff-person__wrapper'>
                                        <div className='courses__staff-person__right-fullname'>
                                            Тимур Султанович
                                        </div>
                                        <div className='courses__staff-person__right-description'>
                                            Эксперт таможенного дела. <br />{' '}
                                            Проходил службу в таможенных органах
                                            СССР и Республики Казахстан. Имеет
                                            звание майора таможенной службы. В
                                            настоящее время работает в сфере
                                            услуг таможенного представителя.
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person2.src})`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className='courses__staff-person'>
                                    <div>
                                        <div
                                            className='courses__staff-person__image'
                                            style={{
                                                backgroundImage: `url(${person3.src})`,
                                            }}
                                        />
                                    </div>
                                    <div className='courses__staff-person__wrapper'>
                                        <div className='courses__staff-person__fullname'>
                                            Ибраева Айдана Нурмухамбетовна
                                        </div>
                                        <div className='courses__staff-person__description'>
                                            Сотрудник компании ТОО &quot;GWL
                                            Group&quot;, специалист-практик.{' '}
                                            <br /> Стаж работы в области
                                            таможенного оформления более 5 лет.
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Courses
