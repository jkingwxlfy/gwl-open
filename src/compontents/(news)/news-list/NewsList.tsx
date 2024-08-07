'use client'
import NewsData from '@/utils/News'
import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'

const NewsList: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <>
                    {NewsData.map(item => (
                        <Link
                            className='news__list-list__item'
                            key={item.id}
                            href={`/news/${item.url}`}
                            style={{
                                backgroundImage: `url(${item.imagePreview.src})`,
                            }}
                        >
                            <div className='news__list-list__item-title'>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </>
            ) : (
                <>
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
                </>
            )}
        </>
    )
}
export default NewsList
