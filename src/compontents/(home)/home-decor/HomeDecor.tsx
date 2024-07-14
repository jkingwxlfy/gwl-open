'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'
import Link from 'next/link'

import decor1 from '@/assets/decor1.png'
import decor2 from '@/assets/decor2.png'
import whiteArrowRight from '@/assets/whitearrowright.png'

const HomeDecor: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? (
                <div className='app__decor-info'>
                    <div className='app__decor-info__title'>
                        Таможенное оформление
                    </div>
                    <div className='app__decor-images'>
                        <Image
                            className='app__decor-images__image1'
                            src={decor1}
                            alt='Изображение'
                        />
                        <Image
                            className='app__decor-images__image2'
                            src={decor2}
                            alt='Изображение'
                        />
                    </div>
                    <div className='app__decor-info__text'>
                        Каждый, кто завозит товар в Казахстан или вывозит его из
                        Казахстана в достаточно большом количестве - является
                        участником ВЭД, так что рано или поздно возникнет
                        проблема таможенного оформления товаров и грузов. <br />{' '}
                        <br /> Если вы хотите сэкономить свое время и получить
                        свой груз вовремя, без “приключений” и за разумную цену,
                        то самым лучшим решением будет доверить таможенное
                        оформление Вашего груза надежному таможенному
                        представителю. <br /> <br />{' '}
                        <span>
                            Такому, как компания&nbsp;<p>“GWL Group”</p>
                        </span>
                    </div>
                    <Link href='/contacts'>
                        Связаться с нами{' '}
                        <Image
                            src={whiteArrowRight}
                            alt='Изображение стрелки'
                        />
                    </Link>
                </div>
            ) : (
                <>
                    <div className='app__decor-info'>
                        <div className='app__decor-info__title'>
                            Таможенное оформление
                        </div>
                        <div className='app__decor-info__text'>
                            Каждый, кто завозит товар в Казахстан или вывозит
                            его из Казахстана в достаточно большом количестве -
                            является участником ВЭД, так что рано или поздно
                            возникнет проблема таможенного оформления товаров и
                            грузов. <br /> <br /> Если вы хотите сэкономить свое
                            время и получить свой груз вовремя, без
                            “приключений” и за разумную цену, то самым лучшим
                            решением будет доверить таможенное оформление Вашего
                            груза надежному таможенному представителю. <br />{' '}
                            <br />{' '}
                            <span>
                                Такому, как компания&nbsp;
                                <p>“GWL Group”</p>
                            </span>
                        </div>
                        <Link href='/contacts'>
                            Связаться с нами{' '}
                            <Image
                                src={whiteArrowRight}
                                alt='Изображение стрелки'
                            />
                        </Link>
                    </div>
                    <div className='app__decor-images'>
                        <Image
                            className='app__decor-images__image1'
                            src={decor1}
                            alt='Изображение'
                        />
                        <Image
                            className='app__decor-images__image2'
                            src={decor2}
                            alt='Изображение'
                        />
                    </div>
                </>
            )}
        </>
    )
}
export default HomeDecor
