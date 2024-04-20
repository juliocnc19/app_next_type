"use server";

import { InputRegister } from "@/defitions/types";
import { prisma } from "./prismaClient";
import bcrypt from "bcrypt";

export async function serverRegister(data: InputRegister) {
  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return { message: "El correo ya exsite", ok: false, status: 400 };
    }
    const passEncrypt = await bcrypt.hash(data.password, 10);
    const resCreate = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passEncrypt,
      },
    });

    const { password: _, ...userNew } = resCreate;

    return { message: "Usuario creado con exito", ok: true, status: 200 };
  } catch (error: any) {
    return { message: error, ok: false, status: 500 };
  }
}
