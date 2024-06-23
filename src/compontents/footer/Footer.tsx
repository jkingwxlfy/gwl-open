'use client'
import useIsMobile from '@/hooks/useIsMobile'

import Map from '@/compontents/map/Map'

import footerbg from '@/assets/footerbg.png'
import './footer.scss'

const Footer: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <footer
            className='footer'
            style={{ backgroundImage: `url(${footerbg.src})` }}
        >
            {isMobile ? (
                <div className='footer__container'>
                    <div className='footer__info'>
                        <div className='footer__title'>Найти нас : </div>
                        <div className='footer__contacts'>
                            <div className='footer__contacts-item'>
                                г. Алматы, пр. Суюнбая д. 12
                            </div>
                            <div className='footer__contacts-item'>
                                Телефон : +7 (727) 367 16 67
                            </div>
                            <div className='footer__contacts-item'>
                                WhatsApp : +7 707 726 75 26
                            </div>
                            <div className='footer__contacts-item'>
                                gwl_group@inbox.ru
                            </div>
                        </div>
                        <div className='footer__copyright'>
                            Copyright © 2024 Таможенный представитель ТОО «GWL
                            group». <br /> Все права защищены.
                        </div>
                    </div>
                    <div className='footer__map'>
                        <Map />
                    </div>
                </div>
            ) : (
                <>
                    <div className='footer__container'>
                        <div className='footer__info'>
                            <div className='footer__title'>Найти нас : </div>
                            <div className='footer__contacts'>
                                <div className='footer__contacts-item'>
                                    г. Алматы, пр. Суюнбая д. 12
                                </div>
                                <div className='footer__contacts-item'>
                                    Телефон : +7 (727) 367 16 67
                                </div>
                                <div className='footer__contacts-item'>
                                    WhatsApp : +7 707 726 75 26
                                </div>
                                <div className='footer__contacts-item'>
                                    gwl_group@inbox.ru
                                </div>
                            </div>
                            <div className='footer__copyright'>
                                Copyright © 2024 Таможенный представитель ТОО
                                «GWL group». <br /> Все права защищены.
                            </div>
                        </div>
                    </div>
                    <div className='footer__map'>
                        <Map />
                    </div>
                </>
            )}
        </footer>
    )
}
export default Footer
