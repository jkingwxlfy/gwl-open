import type { StaticImageData } from 'next/image'

export interface IService {
    id: number
    title: string
    image?: StaticImageData
    text: string
}
