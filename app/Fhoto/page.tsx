"use client"
import Link from "next/link"
import WonderImagePhoto from "./wander"
import Image from "next/image"


export default function page() {
  return (
    <main className="conteiner mx-auto">
        <h1 className="text-center text-3xl font-bold my-4"> The Place of the IRAN</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {WonderImagePhoto.map(({id,src,name})=>(
                <Link key={id} href={`/Fhoto/${id}`}>
                  <Image
                  alt={name}
                  src={src}
                  className="w-full object-cover aspect-square"
                  >
                  </Image>
                </Link>
            ))}
            
        </div>
    </main>
  )
}
