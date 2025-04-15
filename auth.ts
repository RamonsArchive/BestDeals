import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import {prisma} from "@/lib/prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({user, account, profile}) {
      try {
        console.log(user, account, profile)

        if (!profile?.sub) {
          console.error("No sub found")
          return false;
        }
        const userId = profile?.sub;
        const image = profile?.picture;
        const firstName = profile?.name;
        const lastName = profile?.family_name;
        const email = profile?.email;
  
        const userExists = await prisma.user.findUnique({
          where: {
            userId: userId,
          },
        });

        if (userExists) {
          console.log("User already exists")
          return true;
        }
  
        if (!userExists) {
          await prisma.user.create({
            data: {
              userId: userId,
              firstName: firstName ?? "",
              lastName: lastName ?? "",
              email: email ?? "",
              imageUrl: image ?? "",
              provider: "google",
            }
          })
        }
        return true;

      } catch (error) {
        console.error(error)
        return false;
      }
      
    }
  }
})