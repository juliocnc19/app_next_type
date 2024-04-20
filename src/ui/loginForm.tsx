"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Routes } from "@/defitions/routesEnum";
import { InputLogin } from "@/defitions/types";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";
import { AlertError,AlertSuccess } from "./components/alertComponent";

export default function FormInsert() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputLogin>();
  const router = useRouter();
  const [spiner, setSpiner] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)

  const onSubmit = async (data: InputLogin) => {
    setSpiner(true);

    const result: any = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result.ok) {
      setIsSuccess(true)
      router.replace(Routes.DASHBOARD);
    } else {
      setSpiner(false)
      setIsOpen(true)

      setTimeout(()=>{
        setIsOpen(false)
      },2500)
    }
  };

  return (
    <>
      <AlertError isOpen={isOpen} title="Acceso denegado" message="Credenciales invalidas"/>
      <AlertSuccess isSuccess={isSuccess} title="Acceso Consedido"/>
        
      <div className="flex flex-col p-8 bg-zinc-50 shadow-2xl rounded w-full sm:w-1/2 md:w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h1 className=" mb-8 text-center text-gray-700 font-bold text-2xl">
            Acceso
          </h1>
          <div className="flex flex-col mb-10">
            <label className="mb-1 text-gray-600">Correo Electronico</label>
            <input
              defaultValue=""
              {...register("email", {
                required: "El email es requerido",
                maxLength: 30,
                minLength: 10,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2"
              type="mail"
              placeholder="Correo electronico"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-12">
            <label className="mb-1 text-gray-600">Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
                min: 1,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
              placeholder="Contraseña"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
          </div>

          <div></div>

          <button
            type="submit"
            className="transition-all duration-200 bg-sky-200 hover:bg-sky-300 border border-gray-300 text-gray-600 text-sm rounded-lg outline-none p-2 font-bold cursor-pointer"
          >
            {spiner ? <Spinner size="sm" /> : "Enviar"}
          </button>

          <div className="flex justify-between mt-6">
            <p>¿No tienes cuenta?</p>
            <Link href={Routes.REGISTER}>
              <span className="text-blue-600">Regístrate</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
