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
    const { title, text } = NewsData.filter(item => item.url === params.name)[0]

    return {
        title,
        description: text,
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
                    <section className='news__promo-wrapper'>
                        <h1 className='news__promo-title'>Новости</h1>
                        <h2 className='news__promo-description'>
                            в таможенном мире вместе с компанией <br />
                            <span>“GWL Group”.</span> <br /> Главные новости дня
                            : актуальные события, аналитика и эксклюзивные
                            материалы
                        </h2>
                    </section>
                </div>
            </div>

            <div className='news-page__main'>
                <section className='news-page__main__container'>
                    <h1 className='news-page__main-title'>
                        {currentNews.title}
                    </h1>
                    <Image
                        src={currentNews.imageTitle}
                        alt='Изображение новостей'
                    />
                    <p
                        className='news-page__main-text'
                        dangerouslySetInnerHTML={{
                            __html: currentNews.text,
                        }}
                    />
                    <p className='news-page__main-data'>{currentNews.data}</p>
                </section>
            </div>
        </section>
    )
}
export default NewsPage
