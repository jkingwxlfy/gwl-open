import ServicesData from '@/utils/ServicesData'
import type { Metadata } from 'next'

import ServicesList from '@/compontents/services-list/ServicesList'

import promo from '@/assets/servicespromo.png'
import './services.scss'

export const metadata: Metadata = {
    title: 'Услуги',
    description: 'Услуги которые мы можем предоставить нашим клиентам',
    keywords: [
        'Таможенные услуги',
        'Услуги GWL GROUP',
        'Таможенное оформление',
        'Растаможка груза Казахстан',
        'Таможенный представитель Казахстан',
        'Внешнеэкономическая деятельность Казахстан',
        'Таможенное право',
        'Логистика Казахстан',
        'Транспортировка грузов',
        'Хранение грузов',
        'Импорт и экспорт Казахстан',
        'Таможенный брокер Казахстан',
        'Оптимизация финансовых затрат',
        'Сокращение времени таможенного оформления',
        'Таможенная консультация',
        'Таможенное сопровождение',
        'Таможенный контроль',
    ],
}

const Services: React.FC = () => {
    return (
        <section className='services'>
            <div
                className='services__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='services__promo__container'>
                    <div className='services__promo-wrapper'>
                        <h1 className='services__promo-title'>Наши услуги</h1>
                        <h2 className='services__promo-description'>
                            Какие услуги мы можем предоставить для наших
                            клиентов?
                        </h2>
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
