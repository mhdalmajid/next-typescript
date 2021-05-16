import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { UserInfoModel, LoginInfoModel } from 'types/models'

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    foo: string
    user: LoginInfoModel
  }
}

/** Example on how to extend the built-in types for JWT */
declare module 'next-auth/jwt' {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    bar: number
  }
}

export interface DefaultUser {
  name?: string | null
  email?: string | null
  image?: string | null
}
