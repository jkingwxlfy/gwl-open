import type { Metadata } from 'next'

import NewsList from '@/compontents/(news)/news-list/NewsList'

import promo from '@/assets/newspromo.png'
import './news.scss'

export const metadata: Metadata = {
    title: 'Новости',
    description: 'Новости в таможенном мире вместе с компанией',
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
                        <div className='news__promo-title'>Новости</div>
                        <div className='news__promo-description'>
                            в таможенном мире вместе с компанией{' '}
                            <span>“GWL Group”</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='news__list'>
                <div className='news__list__container'>
                    <div className='news__list-title'>Новости</div>
                    <div className='news__list-list'>
                        <NewsList />
                    </div>
                    {/* {isMobile ? (
                        <Link className='news__list-button' href='/'>
                            Смотреть все
                        </Link>
                    ) : null} */}
                </div>
            </div>
        </section>
    )
}
export default News
