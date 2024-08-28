'use client'
import useIsMobile from '@/hooks/useIsMobile'

const AboutOp: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <>
                    <div className='about-page__opp-text'>
                        <div className='about-page__opp-text__pointer' />
                        <div className='about-page__opp-text__content'>
                            Поможем грамотно составить{' '}
                            <span>
                                договор о внешнеэкономической деятельности
                            </span>
                            . Как и в любом договоре, в договоре ВЭД существует
                            много нюансов, которые надо учитывать при его
                            составлении. Все это поможет избежать лишних
                            вопросов в органах контроля и в банке.
                        </div>
                    </div>
                    <div className='about-page__opp-text-right'>
                        <div className='about-page__opp-text__pointer-right' />
                        <div className='about-page__opp-text__content'>
                            <span>
                                Корректно оформим декларацию на ваш товар.
                            </span>{' '}
                            Мы экономим ваше время и средства, избавляя от
                            необходимости покупать дорогостоящее программное
                            обеспечение для оформления деклараций, а также от
                            необходимости вникать во все тонкости этого
                            процесса.
                        </div>
                    </div>
                    <div className='about-page__opp-text'>
                        <div className='about-page__opp-text__pointer' />
                        <div className='about-page__opp-text__content'>
                            <span>Проведем растаможку “под ключ”</span>. С
                            момента оформления доверенности, мы выполним весь
                            процесс растаможки груза - от подачи декларации до
                            очистки и доставки груза непосредственно на склад
                            клиента - с минимальным участием самого клиента. Вам
                            останется только расписаться в получении!
                        </div>
                    </div>
                    <div className='about-page__opp-text-right'>
                        <div className='about-page__opp-text__pointer-right' />
                        <div className='about-page__opp-text__content'>
                            <span>
                                Поможем разрешить спор с таможенными органами.
                            </span>{' '}
                            Случается так, что у предпринимателя возникают
                            проблемы с органами контроля в процессе
                            самостоятельной растаможки груза. Мы оперативно
                            включимся в вашу ситуацию на любом этапе и окажем
                            юридическую помощь в разрешении любой спорной
                            ситуации. Мы всегда на вашей стороне!
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='about-page__opp-item__left'>
                        <div className='about-page__opp-item__left-text'>
                            <div className='about-page__opp-item__left-pointer' />
                            Поможем грамотно составить{' '}
                            <span>
                                договор о внешнеэкономической деятельности
                            </span>
                            . Как и в любом договоре, в договоре ВЭД существует
                            много нюансов, которые надо учитывать при его
                            составлении. Все это поможет избежать лишних
                            вопросов в органах контроля и в банке.
                        </div>
                    </div>
                    <div className='about-page__opp-item__right'>
                        <div className='about-page__opp-item__right-text'>
                            <div className='about-page__opp-item__right-pointer' />
                            <span>
                                Корректно оформим декларацию на ваш товар.
                            </span>{' '}
                            Мы экономим ваше время и средства, избавляя от
                            необходимости покупать дорогостоящее программное
                            обеспечение для оформления деклараций, а также от
                            необходимости вникать во все тонкости этого
                            процесса.
                        </div>
                    </div>
                    <div className='about-page__opp-item__left'>
                        <div className='about-page__opp-item__left-text'>
                            <div className='about-page__opp-item__left-pointer' />
                            <span>Проведем растаможку “под ключ”</span>. С
                            момента оформления доверенности, мы выполним весь
                            процесс растаможки груза - от подачи декларации до
                            очистки и доставки груза непосредственно на склад
                            клиента - с минимальным участием самого клиента. Вам
                            останется только расписаться в получении!
                        </div>
                    </div>
                    <div className='about-page__opp-item__right'>
                        <div className='about-page__opp-item__right-text'>
                            <div className='about-page__opp-item__right-pointer' />
                            <span>
                                Поможем разрешить спор с таможенными органами.
                            </span>{' '}
                            Случается так, что у предпринимателя возникают
                            проблемы с органами контроля в процессе
                            самостоятельной растаможки груза. Мы оперативно
                            включимся в вашу ситуацию на любом этапе и окажем
                            юридическую помощь в разрешении любой спорной
                            ситуации. Мы всегда на вашей стороне!
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default AboutOp
