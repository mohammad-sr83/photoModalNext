import React, {  createContext, useState } from 'react';

type Post={///تعریف کردن تایپی که میخواهیم به کانتکس پاس بدهیم
    isOpen:string;
    setIsOpen: React.Dispatch<React.SetStateAction<string>>
}

export const SidebarContext = createContext<null|Post>(null);///ساختن کانتکس خودمون

export function SidebarProvaider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [isOpen, setIsOpen] = useState("");

  return (//در برگیرنده کانتکس که دو تا متد به آن پاس میدهیم 
    <SidebarContext.Provider value={{ isOpen ,setIsOpen}}>
      {children}
    </SidebarContext.Provider>
  );
}