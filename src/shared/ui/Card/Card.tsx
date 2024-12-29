import cn from 'classnames'

import './card.scss'

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Card: React.FC<ICardProps> = ({ children, className, ...props }) => {
    return (
        <article className={cn('card', [className])} {...props}>
            {children}
        </article>
    )
}
export default Card
