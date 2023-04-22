import { StatusUser } from '../utils/enums'

export interface Iong {
    username: string
    email: string
    password: string
    website?: string
    telephone?: number
    photo?: string
    about_me?: string
    ong_types?: String[] 
}