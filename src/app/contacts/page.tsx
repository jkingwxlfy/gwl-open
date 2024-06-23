import promo from '@/assets/contactspromo.png'
import map from '@/assets/contactmap.png'
import './contacts.scss'

const Contacts: React.FC = () => {
    return (
        <section className='contacts'>
            <div
                className='contacts__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='contacts__promo__container'>
                    <div className='contacts__promo-wrapper'>
                        <div className='contacts__promo-title'>
                            Наши контактные данные
                        </div>
                        <div className='contacts__promo-pretitle'>
                            свяжитесь с нами и начните расширять Ваш бизнес!
                        </div>
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
