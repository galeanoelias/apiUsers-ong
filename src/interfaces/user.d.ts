import { StatusUser } from '../utils/enums'

export interface User {
    username: String
    firstname?: String
    lastname?: String
    email: String
    password: string
    avatar?: string
    about_me?: String
    cv?: string
    workfield?: String[]
    workingmodality?: String[]
    projects?: string
    certifications?: string
}