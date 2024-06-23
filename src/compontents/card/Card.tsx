import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import './card.scss'

interface ICardProps {
    image: StaticImageData
    title: string
    text: string
}

const Card: React.FC<ICardProps> = ({ image, title, text }) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <Image src={image} alt='Изображение логотипа карточки' />
            </div>
            <div className='card__title'>{title}</div>
            <div className='card__text'>{text}</div>
        </div>
    )
}
export default Card
