"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Routes } from "@/defitions/routesEnum";
import Link from "next/link";
import { InputRegister } from "@/defitions/types";
import { serverRegister } from "@/lib/registerServer";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";
import { AlertError,AlertSuccess } from "./components/alertComponent";

export default function FormInsert() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputRegister>();

  const router = useRouter();
  const [spiner,setSpiner] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const [title, setTitle] = useState(null)

  const onSubmit = async (data: InputRegister) => {
    setSpiner(true)
    const res = await serverRegister(data)
    if (res.ok) {
      setIsSuccess(true)
      setTitle(res.message)
      setTimeout(() => {
        router.refresh();
        router.push(Routes.LOGIN);
      },1500);
      
    }else{
      setSpiner(false)
      setIsOpen(true)
      setTitle(res.message)
      setTimeout(()=>{
        setIsOpen(false)
      },2500)
    }

  };

  return (
    <>
      <AlertError isOpen={isOpen} title="Error" message={title}/>
      <AlertSuccess isSuccess={isSuccess} title={title}/>

      <div className="flex flex-col p-8 bg-zinc-50 shadow-2xl rounded w-full sm:w-1/2 md:w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h1 className=" mb-8 text-center text-gray-700 font-bold text-2xl">
            Registro
          </h1>
          <div className="flex flex-col mb-8">
            <label className="mb-1 text-gray-600">Nombre</label>
            <input
              defaultValue=""
              {...register("name", {
                required: "El nombre es requerido",
                maxLength: 30,
                minLength: 3,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2"
              placeholder="Usuario"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-1 text-gray-600">Correo Electronico</label>
            <input
              type="mail"
              defaultValue=""
              {...register("email", {
                required: "El email es requerido",
                maxLength: 30,
                minLength: 8,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2"
              placeholder="Correo Electronico"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-1 text-gray-600">Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
                min: 4,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            value="Registrar"
            className="transition-all duration-200 bg-sky-200 hover:bg-sky-300 border border-gray-300 text-gray-600 text-sm rounded-lg outline-none p-2 font-bold cursor-pointer"
          >{spiner ? <Spinner size="sm"/> : "Registrar"}</button>

          <div className="flex justify-between mt-6">
            <p>¿Ya tienes cuenta?</p>
            <Link href={Routes.LOGIN}>
              <span className="text-blue-600">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
