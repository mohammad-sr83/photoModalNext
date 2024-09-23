import Image from "next/image"
import WonderImagePhoto, { WonderImage } from "../../Fhoto/wander"

export default function page({ params }: { params: { id: string } }) {
  const Photo: WonderImage = WonderImagePhoto.find((p) => p.id === params.id)!;
  return (
    <div className="conteiner mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{Photo.name}</h1>
        </div>
        <Image 
        alt={Photo.name}
        src={Photo.src}
        className="w-full object-cover aspect-square"
        ></Image>
        <div className="bg-white py-4">
          <h2>{Photo.photographer}</h2>
          <h2>{Photo.location}</h2>
        </div>
      </div>
    </div>
  )
}
