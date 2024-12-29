'use client'
import useIsMobile from '@/hooks/useIsMobile'
import NewsData from '@/utils/News'
import Link from 'next/link'
import Slider from '../../slider/Slider'

const HomeNews: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <Slider
                    styles={{
                        inner: { gap: '32px', height: '238px' },
                        wrapper: { width: '330px' }, // change wrapper if you want to wide the view's window
                        slider: { width: '256px', height: '238px' },
                    }}
                >
                    {NewsData.map(item => (
                        <Link
                            className='app__news-list__item'
                            href={`/news/${item.url}`}
                            key={item.id}
                            style={{
                                backgroundImage: `url(${item.imagePreview.src})`,
                            }}
                        >
                            <div className='app__news-list__item-title'>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </Slider>
            ) : (
                <div className='app__news-list'>
                    {NewsData.length > 3 ? (
                        <>
                            {NewsData.slice(0, 3).map(item => (
                                <Link
                                    className='app__news-list__item'
                                    href={`/news/${item.url}`}
                                    key={item.id}
                                    style={{
                                        backgroundImage: `url(${item.imagePreview.src})`,
                                    }}
                                >
                                    <div className='app__news-list__item-title'>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </>
                    ) : (
                        NewsData.map(item => (
                            <Link
                                className='app__news-list__item'
                                href={`/news/${item.url}`}
                                key={item.id}
                                style={{
                                    backgroundImage: `url(${item.imagePreview.src})`,
                                }}
                            >
                                <div className='app__news-list__item-title'>
                                    {item.title}
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </>
    )
}
export default HomeNews
