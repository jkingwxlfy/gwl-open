'use client'
import useIsMobile from '@/hooks/useIsMobile'

import person1 from '@/assets/coursesstaff1.png'
import person2 from '@/assets/coursesstaff2.png'
import person3 from '@/assets/coursesstaff3.png'

const CoursesStaff: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
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
                            является заместителем директора ТОО &quot;GWL
                            group&quot; и ведущим специалистом компании по
                            таможенному оформлению грузов и смежным
                            процедурам.Проходила службу в таможенных органах
                            СССР и Республики Казахстан, где начиная от рядового
                            инспектора стала заместителем начальника
                            Департамента таможенного контроля по
                            Северо-Казахстанской области. Имеет звание
                            подполковника таможенной службы.
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
                                Байсалов Азамат
                            </div>
                        </div>
                        <div className='courses__staff-person__description'>
                            Не только рассказывает о теоретических основах, но и
                            приводит примеры из реальной практики, что помогает
                            студентам лучше понять, как применять полученные
                            знания на практике. Кроме того, учитель активно
                            использует интерактивные методы обучения, такие как
                            кейс-стади и симуляции
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
                            Советник таможенной службы РК, специалист-практик.
                            Имеет общирный опыт работы в таможенной сфере, а
                            также Он всегда открыт для вопросов и готов оказать
                            поддержку каждому студенту, помогая преодолеть
                            трудности в обучении и достигать высоких
                            результатов.
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
                                Является заместителем директора ТОО &quot;GWL
                                group&quot; и ведущим специалистом компании по
                                таможенному оформлению грузов и смежным
                                процедурам. <br /> Проходила службу в таможенных
                                органах СССР и Республики Казахстан, где начиная
                                от рядового инспектора стала заместителем
                                начальника Департамента таможенного контроля по
                                Северо-Казахстанской области. Имеет звание
                                подполковника таможенной службы.
                            </div>
                        </div>
                    </div>

                    <div className='courses__staff-person'>
                        <div className='courses__staff-person__wrapper'>
                            <div className='courses__staff-person__right-fullname'>
                                Байсалов Азамат
                            </div>
                            <div className='courses__staff-person__right-description'>
                                Не только рассказывает о теоретических основах,
                                но и приводит примеры из реальной практики, что
                                помогает студентам лучше понять, как применять
                                полученные знания на практике. Кроме того,
                                учитель активно использует интерактивные методы
                                обучения, такие как кейс-стади и симуляции
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
                                Качкаев Евгений Николаевич
                            </div>
                            <div className='courses__staff-person__description'>
                                Советник таможенной службы РК,
                                специалист-практик. Имеет общирный опыт работы в
                                таможенной сфере, а также Он всегда открыт для
                                вопросов и готов оказать поддержку каждому
                                студенту, помогая преодолеть трудности в
                                обучении и достигать высоких результатов.
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default CoursesStaff
