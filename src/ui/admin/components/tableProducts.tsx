"use client"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Skeleton} from "@nextui-org/react";
import { getProducts } from "@/lib/products/getProducts";
import { useState, useEffect } from "react";
import { ProductsType } from "@/defitions/types";

export default function TableProducts() {
    const [data,setData] = useState<ProductsType[]|null>(null)

    useEffect(() => {
        const fetchData = async () => {
          const products = await getProducts()
          setData(products?.products)
        };
    
        fetchData();
      }, []);

  return (
    <div className="m-4">
    <Table aria-label="Tabla de productos">
      <TableHeader>
        <TableColumn className="bg-orange-100 text-orange-700">Nombre</TableColumn>
        <TableColumn className="bg-orange-100 text-orange-700">Fecha</TableColumn>
        <TableColumn className="bg-orange-100 text-orange-700">Precio</TableColumn>
        <TableColumn className="bg-orange-100 text-orange-700">Cantidad</TableColumn>
        <TableColumn className="bg-orange-100 text-orange-700">Autor</TableColumn>
        <TableColumn className="bg-orange-100 text-orange-700">Accion</TableColumn>
      </TableHeader> 
      <TableBody>
        {data ? (data!.map((item)=>(
        <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date.toDateString()}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.authorId}</TableCell>
              <TableCell>Accion</TableCell>  
          </TableRow>  
        ))):(
            <TableRow>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>
            <TableCell><Skeleton className="h-4 w-full rounded-lg bg-sky-200"/></TableCell>  
        </TableRow>  
        )}
        </TableBody> 
    </Table>
    </div>
  );
}
