import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/shared/ui'

import whatsapp from '@/assets/whatsappicon-trans.png'
import greenArrowRight from '@/assets/green-arrow-right.png'
import instagram from '@/assets/instagram icon.png'

const HeroSectionInfo: React.FC = () => {
    return (
        <div className='app__wrapper'>
            <section className='app__info'>
                <h1 className='app__title'>GWL GROUP</h1>
                <p className='app__pretitle'>Лучший Таможенный представитель</p>
                <p className='app__description'>
                    <span>в Республике Казахстан,</span> который расширит
                    границы Вашего бизнеса до международного уровня!
                </p>
            </section>

            <section className='app__contacts'>
                <div>
                    <h1 className='app__predescr'>
                        более 12 успешных лет решения задач любых сложностей
                        наших клиентов
                    </h1>
                    <LinkButton
                        type='white'
                        href='/contacts'
                        width={300}
                        height={48}
                        mobileWidth={256}
                    >
                        Связаться с нами{' '}
                        <Image
                            src={greenArrowRight}
                            alt='Изображение стрелки'
                        />
                    </LinkButton>
                </div>

                <div className='app__contacts-container'>
                    <h1 className='app__contacts-number'>+7 (727) 367 16 67</h1>
                    <div className='app__contacts-wrapper'>
                        <p className='app__contacts-email'>
                            gwl_group@inbox.ru
                        </p>
                        <div className='app__contacts-links'>
                            <Link
                                href='https://www.instagram.com/gwlgroup/'
                                className='app__promo-contacts__item'
                            >
                                <Image
                                    src={instagram}
                                    alt='Иконка инстаграмма'
                                    className='app__contacts-image'
                                />
                            </Link>
                            <Link
                                href='https://wa.me/77077267526'
                                className='app__promo-contacts__item'
                            >
                                <Image
                                    src={whatsapp}
                                    alt='Иконка инстаграмма'
                                    className='app__contacts-image'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeroSectionInfo
