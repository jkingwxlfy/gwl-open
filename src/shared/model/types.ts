import { routes } from '@/shared'

export type RoutePath = (typeof routes)[keyof typeof routes]
