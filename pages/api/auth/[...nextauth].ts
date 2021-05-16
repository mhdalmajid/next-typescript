import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { post } from '@core/api'
import { UserInfoModel } from '../../../types/models/user-info-model'
import { LoginInfoModel } from '../../../types/models/login-info-model'

const providers = [
  Providers.Credentials({
    id: 'credentials',
    name: 'Credentials',
    credentials: {
      email: { label: 'email', type: 'email' },
      password: { label: 'password', type: 'password' },
    },
    authorize: async (credentials: { email: string; password: string }) => {
      try {
        const response = await post('Users/login', {
          password: credentials.password,
          email: credentials.email,
        })
        if (response) return response.data
        return null
      } catch (error: any) {
        throw new Error('invalid email or password')
      }
    },
  }),
  Providers.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,

    // authorizationUrl:
    //   'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
  }),
]

const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token
      token.name = user.name || user.userName
      token.image = user.avatar
      token.id = user.id
    }
    return token
  },

  async session(session, user) {
    session.accessToken = user.accessToken
    session.user.id = user.id

    return session
  },
  // async signIn(user, account, profile) {
  //   if (
  //     account.provider === 'google' &&
  //     profile.verified_email === true &&
  //     profile.email.endsWith('@example.com')
  //   ) {
  //     return true
  //   }
  //   return false
  // },
}

const options: NextAuthOptions = {
  providers,
  callbacks,
  jwt: {
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    // encryption: true,
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    newUser: '/profile',
    // error: '/error',
  },
  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
}

export default (req: any, res: any) => NextAuth(req, res, options)
