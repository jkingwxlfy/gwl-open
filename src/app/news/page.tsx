'use client'
import Link from 'next/link'
import NewsData from '@/utils/News'

import promo from '@/assets/newspromo.png'
import './news.scss'

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
                        {NewsData.map(item => (
                            <Link
                                className='news__list-list__item'
                                key={item.id}
                                href={`/news/${item.url}`}
                            >
                                <div
                                    className='news__list-list__item-image'
                                    style={{
                                        backgroundImage: `url(${item.imagePreview.src})`,
                                    }}
                                />
                                <div className='news__list-list__item-title'>
                                    {item.title}
                                </div>
                            </Link>
                        ))}
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
