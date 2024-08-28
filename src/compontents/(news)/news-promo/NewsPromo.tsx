'use client'
import useIsMobile from '@/hooks/useIsMobile'

const NewsPromo: React.FC = () => {
    const isMobile = useIsMobile()

    return isMobile ? (
        <>
            <h1 className='news__promo-title'>Новости</h1>
            <h2 className='news__promo-description'>
                в таможенном мире вместе с компанией
                <span>“GWL Group”</span> <br />
                Главные новости дня : актуальные события, аналитика и
                эксклюзивные материалы
            </h2>
        </>
    ) : (
        <>
            <h1 className='news__promo-title'>Новости</h1>
            <h2 className='news__promo-description'>
                в таможенном мире вместе с компанией <br />
                <span>“GWL Group”.</span> <br /> Главные новости дня :
                актуальные события, аналитика и эксклюзивные материалы
            </h2>
        </>
    )
}
export default NewsPromo
