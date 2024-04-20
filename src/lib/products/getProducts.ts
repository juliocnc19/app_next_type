"use server"

import { prisma } from "../prismaClient"

export async function getProducts(){
    try{
        const products = await prisma.products.findMany()
        return {ok:true,status:200,products}
    }catch(e){
        return {ok:false,status:500,products:null}
    }
}