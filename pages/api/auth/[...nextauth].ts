import Nextauth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) =>
  Nextauth(req, res, {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    database: process.env.DATABASE_URL,
    pages: {
      signIn: '/signin',
    },
  })
