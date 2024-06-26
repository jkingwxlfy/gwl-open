'use client'
import ServicesData from '@/utils/ServicesData'

import ServicesList from '@/compontents/services-list/ServicesList'

import promo from '@/assets/servicespromo.png'
import './services.scss'

const Services: React.FC = () => {
    return (
        <section className='services'>
            <div
                className='services__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='services__promo__container'>
                    <div className='services__promo-wrapper'>
                        <div className='services__promo-title'>Наши услуги</div>
                        <div className='services__promo-description'>
                            Какие услуги мы можем предоставить для наших
                            клиентов?
                        </div>
                    </div>
                </div>
            </div>
            <ServicesList
                servicesData={ServicesData}
                listTitle='Таможенные услуги'
                selectTitle='Выбрать услугу : '
            />
        </section>
    )
}
export default Services
