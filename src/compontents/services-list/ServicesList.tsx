'use client'
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { IService } from '@/models/IService'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'
import type { SingleValue } from 'react-select'
import type { IOptionsSelect } from '../UI/select/MySelect'

import { MySelect } from '../UI'

import whiteArrowRight from '@/assets/whitearrowright.png'
import greenArrowRight from '@/assets/green-arrow-right.png'
import './serviceslist.scss'

interface IServicesListProps {
    servicesData: IService[]
    listTitle: string
    selectTitle: string
}

const ServicesList: React.FC<IServicesListProps> = ({
    servicesData,
    listTitle,
    selectTitle,
}) => {
    const [selectedService, setSelectedService] = useState<IService>(
        servicesData[0],
    )
    const [selectedServiceName, setSelectedServiceName] =
        useState<SingleValue<IOptionsSelect>>(null)
    const isMobile = useIsMobile()

    const handleServiceClick = (id: number) => {
        const foundService = servicesData.find(item => item.id === id)
        if (foundService) {
            setSelectedService(foundService)
        }
    }

    useEffect(() => {
        const foundService = servicesData.find(
            item => item.title === selectedServiceName?.value,
        )
        if (foundService) {
            setSelectedService(foundService)
        }
    }, [selectedServiceName])

    return (
        <div className='services-list'>
            <div className='services-list__container'>
                {isMobile ? null : (
                    <div className='services-list-title'>{listTitle}</div>
                )}
                <div className='services-list-wrapper'>
                    {isMobile ? (
                        <MySelect
                            setState={setSelectedServiceName}
                            state={selectedServiceName}
                            defaultValue={selectTitle}
                            options={servicesData}
                        />
                    ) : (
                        <div className='services-list-items'>
                            {servicesData.map(item => (
                                <div
                                    className={`services-list-item ${item.id === selectedService.id ? 'selected' : ''}`}
                                    key={item.id}
                                    onClick={() => handleServiceClick(item.id)}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='services-list-info'>
                        <div
                            className={
                                selectedService.image
                                    ? 'services-list-info__title'
                                    : 'services-list-info__title widened'
                            }
                        >
                            {selectedService.title}
                        </div>
                        {selectedService.image ? (
                            <Image
                                className='services-list-info__image'
                                src={
                                    isMobile && selectedService.imageMobile
                                        ? selectedService.imageMobile
                                        : selectedService.image
                                }
                                alt='Изображение выбранной услуги'
                            />
                        ) : null}
                        <div
                            className='services-list-info__text'
                            dangerouslySetInnerHTML={{
                                __html: selectedService.text,
                            }}
                        />
                        <Link className='services-list-button' href='/contacts'>
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
    )
}
export default ServicesList
