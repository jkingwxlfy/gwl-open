'use client'
import Image from 'next/image'
import Link from 'next/link'
import useIsMobile from '@/hooks/useIsMobile'

import whiteArrowRight from '@/assets/whitearrowright.png'
import course from '@/assets/course.png'

const CoursesInfo: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <>
                    <div className='courses__info-title'>
                        Школа Таможенного Брокера
                    </div>
                    <div className='courses__info-image'>
                        <Image src={course} alt='Изображение коуча' />
                    </div>
                    <div className='courses__info-pretitle'>
                        <span>Специалист</span> по Таможенному Декларированию
                    </div>
                    <div className='courses__info-description'>
                        Этот курс предназначен для сотрудников компаний,
                        занимающихся международными поставками и
                        внешнеэкономической деятельностью.
                        <br /> <br />
                        Участники изучают правила и нормы в области
                        международной торговли, учатся заполнять документы и
                        эффективно взаимодействовать с контролирующими органами.
                        Программа курса позволяет самостоятельно осуществлять
                        процесс оформления грузов, ускорять его, корректно
                        декларировать стоимость товаров и их классификационные
                        коды, а также точно рассчитывать налоги и сборы.
                        <br /> <br />
                        По окончании обучения участники получают сертификат.
                        Курс проходит в Алматы
                    </div>
                    <Link
                        className='courses__info-button'
                        href='https://docs.google.com/forms/d/e/1FAIpQLSf4Z19Q3fjrvdFo7fnDtmxrmaaZYoR158DYiLnnTouhVSmcGQ/viewform'
                    >
                        Записаться на курс
                        <Image
                            src={whiteArrowRight}
                            alt='Изображение стрелки'
                        />
                    </Link>
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
                                Этот курс предназначен для сотрудников компаний,
                                занимающихся международными поставками и
                                внешнеэкономической деятельностью.
                                <br /> <br />
                                Участники изучают правила и нормы в области
                                международной торговли, учатся заполнять
                                документы и эффективно взаимодействовать с
                                контролирующими органами. Программа курса
                                позволяет самостоятельно осуществлять процесс
                                оформления грузов, ускорять его, корректно
                                декларировать стоимость товаров и их
                                классификационные коды, а также точно
                                рассчитывать налоги и сборы.
                                <br /> <br />
                                По окончании обучения участники получают
                                сертификат. Курс проходит в Алматы
                            </div>
                            <Link
                                className='courses__info-button'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSf4Z19Q3fjrvdFo7fnDtmxrmaaZYoR158DYiLnnTouhVSmcGQ/viewform'
                            >
                                Записаться на курс
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </Link>
                        </div>
                        <div className='courses__info-image'>
                            <Image src={course} alt='Изображение коуча' />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default CoursesInfo
