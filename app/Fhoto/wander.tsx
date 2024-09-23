import Photo1 from '@/public/image/1.jpg'
import Photo2 from '@/public/image/2.jpg'
import Photo3 from '@/public/image/3.jpg'
import Photo4 from '@/public/image/4.webp'
import Photo5 from '@/public/image/5.jpg'
import Photo6 from '@/public/image/6.jpg'
import Photo7 from '@/public/image/8.webp'
import { StaticImageData } from 'next/image'

export type WonderImage={
    id:string;
    name:string;
    src:StaticImageData;
    photographer:string;
    location:string
}

const WonderImagePhoto :WonderImage[]=[
    {
        id:'1',
        name:'Gilan',
        src:Photo1,
        photographer:'photo in the place for north in the iran ',
        location:'Iran'
    },
    {
        id:'2',
        name:'Esfehan',
        src:Photo2,
        photographer:'photo in the place for Esfehan in the iran for in the realy good thems ',
        location:'Iran'
    },  
    {
        id:'3',
        name:'Iran',
        src:Photo3,
        photographer:'photo in the place for  iran ',
        location:'Iran'
    },
    {
        id:'4',
        name:'menar',
        src:Photo4,
        photographer:'photo in the place for menar jonbon of the iran ',
        location:'Iran'
    },
    {
        id:'5',
        name:'Azadi',
        src:Photo5,
        photographer:'photo in the place for Azadi in the iran of the Tehran ',
        location:'Iran'
    },
    {
        id:'6',
        name:'Hafez',
        src:Photo6,
        photographer:'photo in the place for Hofez  in the iran of the shiraz ',
        location:'Iran'
    },
    {
        id:'7',
        name:'Emazing',
        src:Photo7,
        photographer:'photo in the place for north  in the iran of the Ramsar ',
        location:'Iran'
    },
] 

export default WonderImagePhoto