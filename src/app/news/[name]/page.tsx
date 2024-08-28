import Image from 'next/image'
import NewsData from '@/utils/News'
import type { Metadata } from 'next'

import promo from '@/assets/newspromo.png'

import '../news.scss'
import './newspage.scss'

interface INewsPageProps {
    params: {
        name: string
    }
}

export function generateMetadata({ params }: INewsPageProps) {
    const description = NewsData.filter(item => item.url === params.name)[0]
        .title

    return {
        title: description,
        description,
    }
}

const NewsPage: React.FC<INewsPageProps> = ({ params }) => {
    const currentNews = NewsData.filter(item => item.url === params.name)[0]

    return (
        <section className='news-page'>
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

            <div className='news-page__main'>
                <div className='news-page__main__container'>
                    <div className='news-page__main-title'>
                        {currentNews.title}
                    </div>
                    <Image
                        src={currentNews.imageTitle}
                        alt='Изображение новостей'
                    />
                    <div
                        className='news-page__main-text'
                        dangerouslySetInnerHTML={{
                            __html: currentNews.text,
                        }}
                    />
                    <div className='news-page__main-data'>
                        {currentNews.data}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewsPage
