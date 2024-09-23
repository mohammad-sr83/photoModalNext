'use client'
import Image from "next/image"
import WonderImagePhoto, { WonderImage } from "../../../wander";
import Modal from "../../../../components/Modal";
export default function page({ params: { id } }: { params: { id: string } }) {
  const Photo: WonderImage = WonderImagePhoto.find((p) => p.id === id)!;
  return (
    <>
      <Modal>
        <Image
          alt={Photo.name}
          src={Photo.src}
          className="w-full object-cover aspect-square"
        ></Image>
        <div className="bg-white py-4">
          <h2 className="text-xl font-bold">{Photo.name}</h2>
          <h2>{Photo.photographer}</h2>
          <h2>{Photo.location}</h2>
        </div>
      </Modal>
    </>
  )
}