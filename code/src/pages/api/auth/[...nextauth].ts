import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      //@ts-ignore
      clientId: "953050878374-36c472086m1m04vvek7ntp9dtsjfgh6c.apps.googleusercontent.com",
       //@ts-ignore
      clientSecret: "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",
    }),
  ],

  secret: "af836ef45262f066ccd1e00bc52a7b22",
  debug: true,
  
})
// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//         //@ts-ignore
//       clientId: process.env.GOOGLE_ID,
//       //@ts-ignore
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // ...add more providers here
//   ], 
// }
// export default NextAuth(authOptions)