"use client"


import CatalogMenu from "../Components/CatalogMenu";
import CatalogAll from "../Components/CatalogAll";

export default function Catalogo(){
    return (
        <section className="flex mt-[80px] md:pl-[100px] w-full h-[800px]">            
            <CatalogAll/>
        </section>
    )
}