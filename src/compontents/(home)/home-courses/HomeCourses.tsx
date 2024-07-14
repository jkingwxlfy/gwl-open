'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'
import Image from 'next/image'

import course from '@/assets/course.png'
import whiteArrowRight from '@/assets/whitearrowright.png'

const HomeCourses: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <div className='app__course-info'>
                    <div className='app__course-info__title'>
                        Школа Таможенного Брокера
                    </div>
                    <div className='app__course-image'>
                        <Image src={course} alt='Изображение' />
                    </div>
                    <div className='app__course-info__pretitle'>
                        <span>Специалист</span> по Таможенному Декларированию
                    </div>
                    <div className='app__course-info__text'>
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
                        Сертификат. Курс проходит в г. Алматы
                    </div>
                    <Link href='/courses'>
                        Подробнее{' '}
                        <Image
                            src={whiteArrowRight}
                            alt='Изображение стрелки'
                        />
                    </Link>
                </div>
            ) : (
                <>
                    <div className='app__course-info'>
                        <div className='app__course-info__title'>
                            Школа Таможенного Брокера
                        </div>
                        <div className='app__course-info__pretitle'>
                            <span>Специалист</span> по Таможенному
                            Декларированию
                        </div>
                        <div className='app__course-info__text'>
                            Данный курс предназначен для работников предприятий,
                            занимающихся внешнеэкономической деятельностью,
                            приемом и поставкой грузов зарубежным партнерам. В
                            ходе курса участники знакомятся с таможенным
                            законодательством, заполняют необходимые таможенные
                            документы, овладевают навыками взаимоотношений с
                            таможенными службами. <br /> <br /> Полученные
                            знания дают возможность самостоятельно, без
                            посредников, правильно совершать таможенные
                            операции, значительно ускорять этот пpoцecc,
                            заявлять таможенную стоимость и код ТН ВЭД, а также
                            грамотно рассчитывать необходимые таможенные
                            платежи. <br /> <br /> По окончании курса ученики
                            получают Сертификат. Курс проходит в г. Алматы
                        </div>
                        <Link href='/courses'>
                            Подробнее{' '}
                            <Image
                                src={whiteArrowRight}
                                alt='Изображение стрелки'
                            />
                        </Link>
                    </div>
                    <div className='app__course-image'>
                        <Image src={course} alt='Изображение' />
                    </div>
                </>
            )}
        </>
    )
}
export default HomeCourses
