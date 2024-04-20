import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prismaClient";
import bcrypt from "bcrypt";
import { Routes } from "@/defitions/routesEnum";
import { CredentialsLogin } from "@/defitions/types";
import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email", placeholder: "email" },
          password: { label: "password", type: "password" },
       },
        async authorize(credentials:CredentialsLogin) {
          const userFound = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          const passwordCredentials = credentials?.password
          const passwordUserFound = userFound ? userFound.password : ""
  
          const userOk = await bcrypt.compare(
            passwordCredentials,
            passwordUserFound
          );

          return (!userFound || !userOk)
            ? null
            : {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
                admin: userFound.admin
              } as any;
        },
      }),
    ],
    pages:{
      signIn:Routes.LOGIN,
    },
    callbacks:{
      jwt({token,user}) {
        if(user){
          token.user = user
        }    
        return token
      },
      session({session,token}){
        session.user = token.user as any
        return session
      }
    }
  };