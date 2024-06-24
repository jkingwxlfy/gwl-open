import QuestionsData from '@/utils/QuestionsData'

import ServicesList from '@/compontents/services-list/ServicesList'

import promo from '@/assets/faqpromo.png'
import './faq.scss'

const Faq: React.FC = () => {
    return (
        <section className='faq'>
            <div
                className='faq__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='faq__promo__container'>
                    <div className='faq__promo-wrapper'>
                        <div className='faq__promo-title'>
                            Ответы на самые частые вопросы
                        </div>
                        <div className='faq__promo-pretitle'>
                            в работе таможенного представителя
                        </div>
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
