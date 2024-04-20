export type CredentialsTypes ={
    redirect: boolean,
    email: string,
    password: string
}

export type CredentialsLogin = CredentialsTypes | any 

export type InputLogin = {
    email: string,
    password: string
}

export type InputRegister = InputLogin &{
    name:string,
}
 export type UserWithRole = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    admin?:boolean | null | undefined
} | null | undefined

export type ProductsType = {
    id: number;
    name: string;
    date: Date;
    price: number;
    quantity: number;
    authorId: number
}