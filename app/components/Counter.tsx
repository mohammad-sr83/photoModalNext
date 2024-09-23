'use client'
import {  SidebarContext } from '@/app/Contaxt/contax'
import { useContext, useState } from 'react'

export default function Counter() {
    const Slider=useContext(SidebarContext)
    const [InputValue,setInputValue]=useState<SetStateAction<null | undefined>>()
  return (
    <div className="w-full h-full flex justify-center flex-col ">
        <h2>Hello World</h2>
        <p>{Slider?.isOpen}</p>
        <input className='bg-white w-full h-full border-slate-950' value={InputValue} onChange={(event)=>setInputValue(event.target.value)}></input>
        <button onClick={()=>Slider?.setIsOpen('hello')}>Change Hello</button>
        <button onClick={()=>Slider?.setIsOpen(InputValue)}>setInputValue</button>
    </div>
  )
}
