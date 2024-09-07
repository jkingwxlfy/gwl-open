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
                        Данный курс предназначен для сотрудников предприятий,
                        занимающихся внешнеэкономической деятельностью, а также
                        приемом и поставкой грузов зарубежным партнерам. В
                        рамках обучения участники изучают актуальное
                        законодательство в области внешнеэкономических операций,
                        осваивают заполнение необходимых документов и
                        взаимодействие с соответствующими службами. <br />{' '}
                        <br /> Полученные знания позволят самостоятельно и
                        эффективно проводить операции, связанные с
                        внешнеэкономической деятельностью. Участники научатся
                        ускорять процесс, определять таможенную стоимость и код
                        по ТН ВЭД, а также корректно рассчитывать необходимые
                        платежи. <br /> <br /> По завершении курса выдается
                        Сертификат. Обучение проходит в г. Алматы.
                    </div>
                    <Link href='https://api.whatsapp.com/send/?phone=77077267526&text&type=phone_number&app_absent=0'>
                        Записаться на курс
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
                            Данный курс предназначен для сотрудников
                            предприятий, занимающихся внешнеэкономической
                            деятельностью, а также приемом и поставкой грузов
                            зарубежным партнерам. В рамках обучения участники
                            изучают актуальное законодательство в области
                            внешнеэкономических операций, осваивают заполнение
                            необходимых документов и взаимодействие с
                            соответствующими службами. <br /> <br /> Полученные
                            знания позволят самостоятельно и эффективно
                            проводить операции, связанные с внешнеэкономической
                            деятельностью. Участники научатся ускорять процесс,
                            определять таможенную стоимость и код по ТН ВЭД, а
                            также корректно рассчитывать необходимые платежи.{' '}
                            <br /> <br /> По завершении курса выдается
                            Сертификат. Обучение проходит в г. Алматы.
                        </div>
                        <Link href='https://api.whatsapp.com/send/?phone=77077267526&text&type=phone_number&app_absent=0'>
                            Записаться на курс
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
