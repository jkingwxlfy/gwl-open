import type { Metadata } from 'next'

import promo from '@/assets/contactspromo.png'
import map from '@/assets/contactmap.png'
import './contacts.scss'

export const metadata: Metadata = {
    title: 'Контакты',
    description:
        'Наши контактные данные свяжитесь с нами и начните расширять Ваш бизнес!',
    keywords: [
        'Контактная информация GWL Group',
        'Наши контакты Алматы',
        'Адрес офиса GWL Group',
        'Телефон GWL Group',
        'WhatsApp GWL Group',
        'Электронная почта GWL Group',
        'Рабочее время GWL Group',
        'Как связаться с GWL Group',
        'Контактная информация компании в Алматы',
        'Телефон и адрес GWL Group',
        'Как дозвониться до GWL Group',
        'Адрес и телефон офиса GWL Group',
        'Контакты GWL Group в Казахстане',
        'Как добраться до офиса GWL Group',
        'Рабочие часы GWL Group',
    ],
}

const Contacts: React.FC = () => {
    return (
        <section className='contacts'>
            <div
                className='contacts__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='contacts__promo__container'>
                    <div className='contacts__promo-wrapper'>
                        <h1 className='contacts__promo-title'>
                            Наши контактные данные
                        </h1>
                        <h2 className='contacts__promo-pretitle'>
                            свяжитесь с нами и начните расширять Ваш бизнес!
                        </h2>
                    </div>
                </div>
            </div>

            <div className='contacts__map'>
                <div className='contacts__map__container'>
                    <div className='contacts__map-title'>
                        Контактная информация
                    </div>
                </div>
                <div
                    className='contacts__map-wrapper'
                    style={{ backgroundImage: `url(${map.src})` }}
                >
                    <div className='contacts__map-wrapper__container'>
                        <div className='contacts__map-info'>
                            <div className='contacts__map-info__title'>
                                Наш адрес :
                            </div>
                            <div className='contacts__map-info__list'>
                                <div className='contacts__map-info__item'>
                                    Офис : <br /> г. Алматы, пр. Суюнбая д. 12
                                </div>
                                <div className='contacts__map-info__item'>
                                    Телефон : <br /> +7 (727) 367 16 67
                                </div>
                                <div className='contacts__map-info__item'>
                                    WhatsApp : <br /> +7 707 726 75 26
                                </div>
                                <div className='contacts__map-info__item'>
                                    Почта : <br /> gwl_group@inbox.ru
                                </div>
                                <div className='contacts__map-info__item'>
                                    Рабочее время : <br /> ПН - ПТ 09:00 - 18:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts
