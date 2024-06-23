'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import useIsMobile from '@/hooks/useIsMobile'
import NewsData from '@/utils/News'

import ContactsBorder from '@/compontents/contacts-border/ContactsBorder'
import Slider from '@/compontents/slider/Slider'

import promoImage from '@/assets/main-promo.png'
import greenArrowRight from '@/assets/green-arrow-right.png'
import whiteArrowRight from '@/assets/whitearrowright.png'
import instagram from '@/assets/instagram icon.png'
import years12 from '@/assets/12years.png'
import decor1 from '@/assets/decor1.png'
import decor2 from '@/assets/decor2.png'
import decor3 from '@/assets/decor3.png'
import course from '@/assets/course.png'
import kcell from '@/assets/kcell.png'
import beeline from '@/assets/beline.png'
import ozyurt from '@/assets/ozyurt.png'
import lft from '@/assets/lftt.png'
import beelinemobile from '@/assets/beelinemobile.png'
import ozyurtmobile from '@/assets/ozyrmobile.png'
import lftmobile from '@/assets/lftmobile.png'
import kcellmobile from '@/assets/kcellmobile.png'
import './app.scss'

const App: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <section className='app'>
            <div
                className='app__promo'
                style={{ backgroundImage: `url(${promoImage.src})` }}
            >
                <div className='app__promo__container'>
                    <div className='app__wrapper'>
                        <div className='app__info'>
                            <h1 className='app__title'>GWL GROUP</h1>
                            <h2 className='app__pretitle'>
                                Лучший Таможенный представитель
                            </h2>
                            <div className='app__description'>
                                в Республике Казахстан, который расширит границы
                                Вашего бизнеса до международного уровня!
                            </div>
                        </div>
                        <div className='app__predescr'>
                            более 12 успешных лет решения задач любых сложностей
                            наших клиентов
                        </div>
                        <Link className='app__button' href='/contacts'>
                            Связаться с нами{' '}
                            <Image
                                src={greenArrowRight}
                                alt='Изображение стрелки'
                            />
                        </Link>
                        {isMobile && (
                            <div className='app__contacts'>
                                <div>+7 (727) 367 16 67</div>
                                <div>gwl_group@inbox.ru</div>
                                <Image
                                    src={instagram}
                                    alt='Лого инстаграмма'
                                    className='app__contacts-image'
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='app__about'>
                <div className='app__about__container'>
                    <div className='app__about-title'>
                        <span>Почему мы?</span>
                        <Link href='/about'>
                            О компании{' '}
                            <Image
                                src={greenArrowRight}
                                alt='Изображение ссылки'
                            />
                        </Link>
                    </div>

                    <div className='app__about-description'>
                        <div
                            className='app__about-description__image'
                            style={{ backgroundImage: `url(${years12.src})` }}
                        >
                            <div className='app__about-description__image-wrapper'>
                                <div className='app__about-description__image-count'>
                                    12
                                </div>
                                <div className='app__about-description__image-title'>
                                    Успешных лет на рынке
                                </div>
                            </div>
                        </div>

                        <div className='app__about-description__info'>
                            <div className='app__about-description__info-title'>
                                GWL GROUP
                            </div>
                            <div className='app__about-description__info-text'>
                                <span>Компания GWL Group</span> - опытный
                                таможенный брокер на рынке РК, занесенный в
                                официальный Казахстанский реестр таможенных
                                представителей. Предоставляет услуги в сфере ВЭД
                                (внешнеэкономической деятельности), включая
                                таможенное оформление грузов, их хранение и
                                транспортировку. <br /> <br /> Мы помогаем
                                Казахстанским компаниям беспрепятственно
                                осуществлять импортно-экспортные операции,
                                начиная от подготовки необходимых документов и
                                вплоть до транспортировки груза в место
                                назначения. Оптимизируем финансовые затраты и
                                сокращаем время таможенного оформления товаров.
                            </div>
                            <Link href='/contacts'>
                                Связаться с нами{' '}
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app__decor'>
                <div className='app__decor__container'>
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
                                Каждый, кто завозит товар в Казахстан или
                                вывозит его из Казахстана в достаточно большом
                                количестве - является участником ВЭД, так что
                                рано или поздно возникнет проблема таможенного
                                оформления товаров и грузов. <br /> <br /> Если
                                вы хотите сэкономить свое время и получить свой
                                груз вовремя, без “приключений” и за разумную
                                цену, то самым лучшим решением будет доверить
                                таможенное оформление Вашего груза надежному
                                таможенному представителю. <br /> <br />{' '}
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
                                    Каждый, кто завозит товар в Казахстан или
                                    вывозит его из Казахстана в достаточно
                                    большом количестве - является участником
                                    ВЭД, так что рано или поздно возникнет
                                    проблема таможенного оформления товаров и
                                    грузов. <br /> <br /> Если вы хотите
                                    сэкономить свое время и получить свой груз
                                    вовремя, без “приключений” и за разумную
                                    цену, то самым лучшим решением будет
                                    доверить таможенное оформление Вашего груза
                                    надежному таможенному представителю. <br />{' '}
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
                </div>
            </div>

            <div className='app__course'>
                <div className='app__course__container'>
                    {isMobile ? (
                        <div className='app__course-info'>
                            <div className='app__course-info__title'>
                                Школа Таможенного Брокера
                            </div>
                            <div className='app__course-image'>
                                <Image src={course} alt='Изображение' />
                            </div>
                            <div className='app__course-info__pretitle'>
                                <span>Специалист</span> по Таможенному
                                Декларированию
                            </div>
                            <div className='app__course-info__text'>
                                Данный курс предназначен для работников
                                предприятий, занимающихся внешнеэкономической
                                деятельностью, приемом и поставкой грузов
                                зарубежным партнерам. В ходе курса участники
                                знакомятся с таможенным законодательством,
                                заполняют необходимые таможенные документы,
                                овладевают навыками взаимоотношений с
                                таможенными службами. <br /> <br /> Полученные
                                знания дают возможность самостоятельно, без
                                посредников, правильно совершать таможенные
                                операции, значительно ускорять этот пpoцecc,
                                заявлять таможенную стоимость и код ТН ВЭД, а
                                также грамотно рассчитывать необходимые
                                таможенные платежи. <br /> <br /> По окончании
                                курса ученики получают Сертификат. Курс проходит
                                в г. Алматы
                            </div>
                            <Link href='/courses'>
                                Подробнее{' '}
                                <Image
                                    src={whiteArrowRight}
                                    alt='Изображение стрелки'
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className='app__course-info'>
                                <div className='app__course-info__title'>
                                    Школа Таможенного Брокера
                                </div>
                                <div className='app__course-info__pretitle'>
                                    <span>Специалист</span> по Таможенному
                                    Декларированию
                                </div>
                                <div className='app__course-info__text'>
                                    Данный курс предназначен для работников
                                    предприятий, занимающихся
                                    внешнеэкономической деятельностью, приемом и
                                    поставкой грузов зарубежным партнерам. В
                                    ходе курса участники знакомятся с таможенным
                                    законодательством, заполняют необходимые
                                    таможенные документы, овладевают навыками
                                    взаимоотношений с таможенными службами.{' '}
                                    <br /> <br /> Полученные знания дают
                                    возможность самостоятельно, без посредников,
                                    правильно совершать таможенные операции,
                                    значительно ускорять этот пpoцecc, заявлять
                                    таможенную стоимость и код ТН ВЭД, а также
                                    грамотно рассчитывать необходимые таможенные
                                    платежи. <br /> <br /> По окончании курса
                                    ученики получают Сертификат. Курс проходит в
                                    г. Алматы
                                </div>
                                <Link href='/courses'>
                                    Подробнее{' '}
                                    <Image
                                        src={whiteArrowRight}
                                        alt='Изображение стрелки'
                                    />
                                </Link>
                            </div>
                            <div className='app__course-image'>
                                <Image src={course} alt='Изображение' />
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ContactsBorder />

            <div className='app__trust'>
                <div className='app__trust__container'>
                    <div className='app__trust-title'>Нам доверяют : </div>
                    <div className='app__trust-companies'>
                        {isMobile ? (
                            <Slider
                                styles={{
                                    inner: { gap: '16px', height: '150px' },
                                    wrapper: { width: '300px' },
                                    slider: { width: '150px', height: '150px' },
                                }}
                            >
                                <div className='app__trust-companies__itemslider'>
                                    <Image
                                        src={beelinemobile}
                                        alt='Логотип билайн'
                                    />
                                </div>
                                <div className='app__trust-companies__itemslider'>
                                    <Image
                                        src={ozyurtmobile}
                                        alt='Логотип озурт'
                                    />
                                </div>
                                <div className='app__trust-companies__itemslider'>
                                    <Image
                                        src={kcellmobile}
                                        alt='Логотоип kcell'
                                    />
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
                    </div>
                </div>
            </div>

            <div className='app__news'>
                <div className='app__news__container'>
                    <div className='app__news-title'>Таможенные новости РК</div>
                    {isMobile ? (
                        <Slider
                            styles={{
                                inner: { gap: '32px', height: '238px' },
                                wrapper: { width: '256px' },
                                slider: { width: '256px', height: '238px' },
                            }}
                        >
                            {NewsData.map(item => (
                                <Link
                                    className='app__news-list__item'
                                    href={`/news/${item.url}`}
                                    key={item.id}
                                    style={{
                                        backgroundImage: `url(${item.imagePreview.src})`,
                                    }}
                                >
                                    <div className='app__news-list__item-title'>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    ) : (
                        <div className='app__news-list'>
                            {NewsData.map(item => (
                                <Link
                                    className='app__news-list__item'
                                    href={`/news/${item.url}`}
                                    key={item.id}
                                    style={{
                                        backgroundImage: `url(${item.imagePreview.src})`,
                                    }}
                                >
                                    <div className='app__news-list__item-title'>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default App
