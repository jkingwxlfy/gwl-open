'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/whatsapp-icon.png'
import avatar from '@/assets/whatsapp-avatar.png'
import avatarchat from '@/assets/whatsapp-avatar-chat.png'
import whitearrowup from '@/assets/white-arrow-up.png'
import './whatsapp.scss'

const WhatsApp: React.FC = () => {
    const [isActive, setIsActive] = useState(false)
    const [message, setMessage] = useState('')

    return (
        <div className='whatsapp'>
            <div
                className={
                    isActive ? 'whatsapp-modal active' : 'whatsapp-modal'
                }
            >
                <div className='whatsapp-modal__header'>
                    <Image
                        src={avatar}
                        alt='Изображение сотрудника компании GWL'
                    />
                    <div className='whatsapp-modal__header-person'>
                        <div className='whatsapp-modal__header-person__name'>
                            Марина Борисовна
                        </div>
                        <div className='whatsapp-modal__header-person__specialty'>
                            Специалист по тамож. оформлению
                        </div>
                    </div>
                </div>
                <div className='whatsapp-modal__chat'>
                    <div className='whatsapp-modal__chat-message'>
                        <Image
                            className='whatsapp-modal__chat-avatar'
                            src={avatarchat}
                            alt='Изображение сотрудника компании GWL'
                        />
                        <div className='whatsapp-modal__chat-text'>
                            👋 Здравствуйте! Как могу Вам помочь? Мы
                            консультируем юридические лица по таможенному
                            оформлению в Казахстане{' '}
                        </div>
                    </div>
                </div>
                <div className='whatsapp-modal__input'>
                    <input
                        className=''
                        type='text'
                        placeholder='Введите сообщение'
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                    <Link
                        className='whatsapp-modal__input-arrow'
                        href={encodeURI(
                            `https://wa.me/77077267526?text=${message}`,
                        )}
                    >
                        <Image
                            src={whitearrowup}
                            alt='Картинка стрелки вверх'
                        />
                    </Link>
                </div>
            </div>
            <div
                className='whatsapp-button'
                onClick={() => setIsActive(!isActive)}
            >
                <Image src={logo} alt='Логотип whatsapp' />
            </div>
        </div>
    )
}
export default WhatsApp
