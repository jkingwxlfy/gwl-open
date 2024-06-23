'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import NavLink from '../nav-link/NavLink'

import burderexit from '@/assets/burgerexit.png'
import burger from '@/assets/burger.png'
import gwllogo from '@/assets/gwllogo.png'
import './header.scss'

const links = [
    { name: 'О компании', to: '/about' },
    { name: 'Услуги', to: '/services' },
    { name: 'Новости', to: '/news' },
    { name: 'Курсы', to: '/courses' },
    { name: 'Вопросы и ответы', to: '/faq' },
    { name: 'Контакты', to: '/contacts' },
]

const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('no-scrollfixed')
        } else {
            document.body.classList.remove('no-scrollfixed')
        }
    }, [isActive])

    return (
        <div className='header'>
            <div className='header__container'>
                <Link className='header__title' href='/'>
                    <Image
                        src={gwllogo}
                        alt='Изображение логотипа компании GWL'
                    />
                    <div className='header__title-name'>
                        <span>GWL</span> <div>GROUP</div>
                    </div>
                </Link>
                <div className='header__links'>
                    {links.map(item => (
                        <NavLink key={item.name} href={item.to}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div
                    className='header__burger-button'
                    onClick={() => setIsActive(true)}
                >
                    <span>Меню</span>
                    <Image src={burger} alt='Кнопка бургер-меню' />
                </div>
            </div>

            <div
                className={
                    isActive ? 'header__burger opened' : 'header__burger'
                }
            >
                <div className='header__burger-header'>
                    <Link
                        className='header__burger-title'
                        href='/'
                        onClick={() => setIsActive(false)}
                    >
                        <span>GWL</span> GROUP
                    </Link>

                    <Image
                        src={burderexit}
                        alt='Крестик'
                        onClick={() => setIsActive(false)}
                    />
                </div>
                <div className='header__burger-links'>
                    {links.map(item => (
                        <Link
                            key={item.name}
                            href={item.to}
                            className='header__burger-link'
                            onClick={() => setIsActive(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Header
