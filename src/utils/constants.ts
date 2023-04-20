import dotenv from 'dotenv'
dotenv.config()

export const jwt_token: string = <string>process.env.JWT_TOKEN;
export const jwt_refresh: string = <string>process.env.JWT_REFRESH;