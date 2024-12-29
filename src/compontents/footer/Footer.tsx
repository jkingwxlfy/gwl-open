'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { Suspense, lazy } from 'react'

import Map from '@/compontents/map/Map'

import footerbg from '@/assets/footerbg.png'
import './footer.scss'

const GoogleMap = lazy(() => import('@/compontents/map/Map'))

const Footer: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <footer
            className='footer'
            style={{ backgroundImage: `url(${footerbg.src})` }}
        >
            {isMobile ? (
                <section className='footer__container'>
                    <div className='footer__info'>
                        <div className='footer__title'>Найти нас : </div>
                        <section className='footer__contacts'>
                            <article className='footer__contacts-item'>
                                г. Алматы, пр. Суюнбая д. 12
                            </article>
                            <article className='footer__contacts-item'>
                                Телефон : +7 (727) 367 16 67
                            </article>
                            <article className='footer__contacts-item'>
                                WhatsApp : +7 707 726 75 26
                            </article>
                            <article className='footer__contacts-item'>
                                gwl_group@inbox.ru
                            </article>
                        </section>
                        <h1 className='footer__copyright'>
                            Copyright © 2024 ТОО «GWL group». <br /> Все права
                            защищены.
                        </h1>
                    </div>
                    {/* <div className='footer__map'>
                        <Suspense fallback={<div></div>}>
                            <GoogleMap />
                        </Suspense>
                    </div> */}
                </section>
            ) : (
                <>
                    <section className='footer__container'>
                        <div className='footer__info'>
                            <div className='footer__title'>Найти нас : </div>
                            <section className='footer__contacts'>
                                <article className='footer__contacts-item'>
                                    г. Алматы, пр. Суюнбая д. 12
                                </article>
                                <article className='footer__contacts-item'>
                                    Телефон : +7 (727) 367 16 67
                                </article>
                                <article className='footer__contacts-item'>
                                    WhatsApp : +7 707 726 75 26
                                </article>
                                <article className='footer__contacts-item'>
                                    gwl_group@inbox.ru
                                </article>
                            </section>
                            <h1 className='footer__copyright'>
                                Copyright © 2024 ТОО «GWL group». <br /> Все
                                права защищены.
                            </h1>
                        </div>
                    </section>
                    {/* <div className='footer__map'>
                        <Suspense fallback={<div></div>}>
                            <GoogleMap />
                        </Suspense>
                    </div> */}
                </>
            )}
        </footer>
    )
}
export default Footer
