module.exports = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.SECRET,
  }
}
