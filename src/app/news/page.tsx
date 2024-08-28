import type { Metadata } from 'next'

import NewsList from '@/compontents/(news)/news-list/NewsList'
import NewsPromo from '@/compontents/(news)/news-promo/NewsPromo'

import promo from '@/assets/newspromo.png'
import './news.scss'

export const metadata: Metadata = {
    title: 'Новости',
    description: 'Новости в таможенном мире вместе с компанией',
    keywords: [
        'Новости таможни',
        'Новости GWL GROUP',
        'Таможенные новости',
        'Обновления таможенного законодательства',
        'Таможенные правила Казахстан',
        'Импорт и экспорт новости',
        'Таможенные изменения',
        'Таможенные процедуры',
        'Новости ВЭД',
        'Растаможка новости',
        'Таможенные сборы новости',
        'GWL GROUP обновления',
        'Таможенные услуги новости',
        'Новости логистики Казахстан',
        'Международная торговля новости',
    ],
}

const News: React.FC = () => {
    return (
        <section className='news'>
            <div
                className='news__promo'
                style={{ backgroundImage: `url(${promo.src})` }}
            >
                <div className='news__promo__container'>
                    <div className='news__promo-wrapper'>
                        <NewsPromo />
                    </div>
                </div>
            </div>

            <div className='news__list'>
                <div className='news__list__container'>
                    <div className='news__list-title'>Новости</div>
                    <div className='news__list-list'>
                        <NewsList />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default News
