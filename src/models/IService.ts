import type { StaticImageData } from 'next/image'

export interface IService {
    id: number
    title: string
    image?: StaticImageData
    imageMobile?: StaticImageData
    text: string
}
