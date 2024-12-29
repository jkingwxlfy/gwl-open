'use client'
import useIsMobile from '@/hooks/useIsMobile'

import Image from 'next/image'
import { LinkButton } from '@/shared/ui'

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
                        проблема таможенного оформления товаров и грузов.Если вы
                        стремитесь сэкономить время и получить груз вовремя, без
                        задержек и по разумной цене, лучше всего доверить
                        оформление вашего груза квалифицированному специалисту в
                        этой области.Такому, как компания “GWL Group” <br />{' '}
                        <br />
                        <span>
                            Такому, как компания&nbsp;<p>“GWL Group”</p>
                        </span>
                    </div>
                    <LinkButton href='/contacts' type='green' mobileWidth={328}>
                        Связаться с нами{' '}
                        <Image
                            src={whiteArrowRight}
                            alt='Изображение стрелки'
                        />
                    </LinkButton>
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
                            грузов. <br /> <br /> Если вы стремитесь сэкономить
                            время и получить груз вовремя, без задержек и по
                            разумной цене, лучше всего доверить оформление
                            вашего груза квалифицированному специалисту в этой
                            области.Такому, как компания “GWL Group” <br />{' '}
                            <br />
                            <div>
                                Такому, как компания&nbsp;
                                <span>“GWL Group”</span>
                            </div>
                        </div>
                        <LinkButton
                            href='/contacts'
                            type='green'
                            mobileWidth={328}
                            width={300}
                        >
                            Подробнее{' '}
                            <Image
                                src={whiteArrowRight}
                                alt='Изображение стрелки'
                            />
                        </LinkButton>
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
