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
                            Она занимает должность заместителя директора ТОО
                            “GWL Group” и является ведущим экспертом компании по
                            вопросам оформления грузов и смежным процессам.
                            Работала в таможенных структурах СССР и Республики
                            Казахстан, начав с рядового инспектора и дойдя до
                            заместителя начальника Департамента контроля по
                            Северо-Казахстанской области. Имеет звание
                            подполковника службы.
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
                            Преподаватель не только объясняет теоретические
                            основы, но и приводит примеры из реальной практики,
                            что помогает учащимся лучше усвоить материал и
                            применять его на практике. Кроме того, активно
                            используются интерактивные методы обучения, такие
                            как разбор конкретных кейсов и моделирование
                            ситуаций.
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
                                Качкаев Евгений Николаевич
                            </div>
                        </div>
                        <div className='courses__staff-person__description'>
                            Советник таможенной службы РК, практикующий
                            специалист с обширным опытом работы. Он всегда
                            открыт для вопросов и готов поддержать каждого
                            студента, помогая преодолеть трудности в обучении и
                            достигать высоких результатов.
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
                                Она занимает должность заместителя директора ТОО
                                “GWL Group” и является ведущим экспертом
                                компании по вопросам оформления грузов и смежным
                                процессам. Работала в таможенных структурах СССР
                                и Республики Казахстан, начав с рядового
                                инспектора и дойдя до заместителя начальника
                                Департамента контроля по Северо-Казахстанской
                                области. Имеет звание подполковника службы.
                            </div>
                        </div>
                    </div>

                    <div className='courses__staff-person'>
                        <div className='courses__staff-person__wrapper'>
                            <div className='courses__staff-person__right-fullname'>
                                Байсалов Азамат
                            </div>
                            <div className='courses__staff-person__right-description'>
                                Преподаватель не только объясняет теоретические
                                основы, но и приводит примеры из реальной
                                практики, что помогает учащимся лучше усвоить
                                материал и применять его на практике. Кроме
                                того, активно используются интерактивные методы
                                обучения, такие как разбор конкретных кейсов и
                                моделирование ситуаций.
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
                                Советник таможенной службы РК, практикующий
                                специалист с обширным опытом работы. Он всегда
                                открыт для вопросов и готов поддержать каждого
                                студента, помогая преодолеть трудности в
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
