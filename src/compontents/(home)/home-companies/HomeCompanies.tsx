'use client'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'

import Slider from '../../slider/Slider'

import kcell from '@/assets/kcell.png'
import beeline from '@/assets/beline.png'
import ozyurt from '@/assets/ozyurt.png'
import lft from '@/assets/lftt.png'
import beelinemobile from '@/assets/beelinemobile.png'
import ozyurtmobile from '@/assets/ozyrmobile.png'
import lftmobile from '@/assets/lftmobile.png'
import kcellmobile from '@/assets/kcellmobile.png'

const HomeCompanies: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <Slider
                    styles={{
                        inner: { gap: '16px', height: '150px' },
                        wrapper: { width: '300px' },
                        slider: { width: '150px', height: '150px' },
                    }}
                >
                    <div className='app__trust-companies__itemslider'>
                        <Image src={beelinemobile} alt='Логотип билайн' />
                    </div>
                    <div className='app__trust-companies__itemslider'>
                        <Image src={ozyurtmobile} alt='Логотип озурт' />
                    </div>
                    <div className='app__trust-companies__itemslider'>
                        <Image src={kcellmobile} alt='Логотоип kcell' />
                    </div>
                    <div className='app__trust-companies__itemslider'>
                        <Image src={lftmobile} alt='Логотип lft' />
                    </div>
                </Slider>
            ) : (
                <div className='app__trust-inner'>
                    <div className='app__trust-companies__item'>
                        <Image src={beeline} alt='Логотип билайн' />
                    </div>
                    <div className='app__trust-companies__item'>
                        <Image src={ozyurt} alt='Логотип озурт' />
                    </div>
                    <div className='app__trust-companies__item'>
                        <Image src={kcell} alt='Логотоип kcell' />
                    </div>
                    <div className='app__trust-companies__item'>
                        <Image src={lft} alt='Логотип lft' />
                    </div>
                </div>
            )}
        </>
    )
}
export default HomeCompanies
