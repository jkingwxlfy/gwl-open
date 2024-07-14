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
                        Данный курс предназначен для работников предприятий,
                        занимающихся внешнеэкономической деятельностью, приемом
                        и поставкой грузов зарубежным партнерам. В ходе курса
                        участники знакомятся с таможенным законодательством,
                        заполняют необходимые таможенные документы, овладевают
                        навыками взаимоотношений с таможенными службами. <br />{' '}
                        <br /> Полученные знания дают возможность
                        самостоятельно, без посредников, правильно совершать
                        таможенные операции, значительно ускорять этот пpoцecc,
                        заявлять таможенную стоимость и код ТН ВЭД, а также
                        грамотно рассчитывать необходимые таможенные платежи.{' '}
                        <br /> <br /> По окончании курса ученики получают
                        Сертификат. <br /> Курс проходит в г. Алматы
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
