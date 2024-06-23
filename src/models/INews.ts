import { StaticImageData } from 'next/image'

export interface INews {
    id: number
    title: string
    imageTitle: StaticImageData
    imagePreview: StaticImageData
    text: string
    url: string
    data: string
}
