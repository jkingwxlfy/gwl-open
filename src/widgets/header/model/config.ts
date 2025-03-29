import { routes } from '@/shared'
import { RoutePath } from '@/shared/model/types'

export const headerLinks: {
    path: RoutePath
    label: string
}[] = [
    { path: routes.ABOUT, label: 'О компании' },
    { path: routes.SERVICES, label: 'Услуги' },
    { path: routes.NEWS, label: 'Новости' },
    { path: routes.COURSES, label: 'Курсы' },
    { path: routes.FAQ, label: 'Вопросы и ответы' },
    { path: routes.CONTACTS, label: 'Контакты' },
]
