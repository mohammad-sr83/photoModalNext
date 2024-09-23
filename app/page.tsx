'use client'
import Link from "next/link";
import Counter from "./components/Counter";
import { SidebarProvaider } from '@/app/Contaxt/contax'
export default function Home() {
  const make = 'Ford';
  const model = 'Mustang';
  const car = { make, model };
  console.log(car);
  return (
    <SidebarProvaider>
      <div className="bg-slate-500 text-center font-bold">
        <Link href={`./Fhoto`}>PHotofid</Link>
      </div>
      <Counter />
    </SidebarProvaider>
  );
}
