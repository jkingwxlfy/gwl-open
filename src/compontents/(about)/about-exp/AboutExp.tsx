'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'

import exp1 from '@/assets/exp1.png'
import exp2 from '@/assets/exp2.png'
import exp3 from '@/assets/exp3.png'

const AboutExp: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
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
                            Наша компания имеет более чем 12-летний опыт в сфере
                            таможенного оформления и предоставляет
                            высококачественные услуги компаниям различных
                            отраслей. <br /> <br /> Мы гордимся нашей репутацией
                            как профессиональных и надежных экспертов в области
                            таможенного оформления. <br /> <br /> Наша команда
                            специалистов обладает глубокими знаниями и опытом,
                            чтобы помочь вам преодолеть любые таможенные вызовы
                            и обеспечить бесперебойный поток вашего бизнеса.
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
                        <div className='about-page__exp-info2__pointer' />В
                        течение нашего 12-летнего пути мы стремились к
                        инновациям и совершенствованию наших услуг, чтобы
                        соответствовать всем Вашим потребностям в сфере
                        таможенного регулирования. Мы ценим каждого клиента и
                        гарантируем индивидуальный подход к решению ваших задач.
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
                        таможенных вопросах и обеспечить вашему бизнесу успешное
                        развитие на мировом рынке. Вместе с{' '}
                        <span>GWL Group</span> Вы можете быть уверены в
                        профессиональном подходе и надежной поддержке на каждом
                        этапе вашего пути.
                    </div>
                </>
            ) : (
                <>
                    <div className='about-page__exp-title'>
                        На рынке РК <br /> <span>12 лет</span>
                    </div>
                    <div className='about-page__exp-info1'>
                        <div className='about-page__exp-info1__text'>
                            Наша компания имеет более чем 12-летний опыт в сфере
                            таможенного оформления и предоставляет
                            высококачественные услуги компаниям различных
                            отраслей. <br /> <br /> Мы гордимся нашей репутацией
                            как профессиональных и надежных экспертов в области
                            таможенного оформления. <br /> <br /> Наша команда
                            специалистов обладает глубокими знаниями и опытом,
                            чтобы помочь вам преодолеть любые таможенные вызовы
                            и обеспечить бесперебойный поток вашего бизнеса.
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
                            <div className='about-page__exp-info2__pointer' />В
                            течение нашего 12-летнего пути мы стремились к
                            инновациям и совершенствованию наших услуг, чтобы
                            соответствовать всем Вашим потребностям в сфере
                            таможенного регулирования. Мы ценим каждого клиента
                            и гарантируем индивидуальный подход к решению ваших
                            задач.
                        </div>
                    </div>
                    <div className='about-page__exp-info3'>
                        <div className='about-page__exp-info3__text'>
                            <div className='about-page__exp-info3__pointer' />
                            Позвольте нам стать Вашим надежным партнером в
                            таможенных вопросах и обеспечить вашему бизнесу
                            успешное развитие на мировом рынке. Вместе с{' '}
                            <span>GWL Group</span> Вы можете быть уверены в
                            профессиональном подходе и надежной поддержке на
                            каждом этапе вашего пути.
                        </div>
                        <Image
                            className='about-page__exp-info3__image'
                            src={exp3}
                            alt='Фотография сотрудника'
                        />
                    </div>
                </>
            )}
        </>
    )
}
export default AboutExp
