import QuestionsData from '@/utils/QuestionsData'
import type { Metadata } from 'next'

import ServicesList from '@/compontents/services-list/ServicesList'

import promo from '@/assets/faqpromo.png'
import './faq.scss'

export const metadata: Metadata = {
    title: 'Часто задаваемые вопросы',
    description:
        'Ответы на самые частые вопросы в работе таможенного представителя',
    keywords: [
        'Часто задаваемые вопросы',
        'FAQ GWL GROUP',
        'Таможенные вопросы',
        'Ответы на вопросы о таможне',
        'Таможенный представитель вопросы',
        'Растаможка FAQ',
        'Таможенные услуги вопросы',
        'ВЭД вопросы',
        'Логистика Казахстан FAQ',
        'Импорт и экспорт вопросы',
        'Таможенное оформление вопросы',
        'Таможенные процедуры вопросы',
        'Таможенное право FAQ',
        'Растаможка груза вопросы',
        'Таможенные сборы вопросы',
    ],
}

const Faq: React.FC = () => {
    return (
        <section className='faq'>
            <div
                className='faq__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='faq__promo__container'>
                    <div className='faq__promo-wrapper'>
                        <h1 className='faq__promo-title'>
                            Ответы на самые частые вопросы
                        </h1>
                        <h2 className='faq__promo-pretitle'>
                            в работе таможенного представителя
                        </h2>
                    </div>
                </div>
            </div>
            <ServicesList
                servicesData={QuestionsData}
                listTitle='Часто задаваемые вопросы'
                selectTitle='Выбрать вопрос : '
            />
        </section>
    )
}
export default Faq
