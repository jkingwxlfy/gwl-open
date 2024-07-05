import type { MetadataRoute } from 'next'
import NewsData from '../utils/News'

interface urls {
    url: string
    lastModified: Date
}

export default function sitemap(): MetadataRoute.Sitemap {
    const newsUrls: urls[] = NewsData.map(item => {
        return {
            url: `https://gwl.kz/news/${item.url}`,
            lastModified: new Date(),
        }
    })

    return [
        {
            url: 'https://gwl.kz/',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/about',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/services',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/news',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/courses',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/faq',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/courses',
            lastModified: new Date(),
        },
        {
            url: 'https://gwl.kz/contacts',
            lastModified: new Date(),
        },
        ...newsUrls,
    ]
}
