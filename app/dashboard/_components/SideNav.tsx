"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { usePathname, useRouter } from "next/navigation";


function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings"
    },
  ];

  const path= usePathname();
  const router = useRouter();

  useEffect(()=>{
    console.log(path);
  },[])
  const handleMenuClick = (menuPath: string) => {
    router.push(menuPath); // Navigate to the selected path
  };

  return (
    <div className="h-screen items-center relative p-5 shadow-lg border bg-gradient-to-tr from-[#FB9AD1] to-[#BC7FCD]">
      <div className="felx justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border"/>

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div key={index} className={`flex gap-2 mb-2 p-3 
          hover:bg-gradient-to-tr from-[#FF597B] to-[#6C22A6] hover:text-white rounded-lg
          cursor-pointer items-center
          ${path===menu.path&& 'bg-[#8644A2] text-white'}
          `}
          onClick={() => handleMenuClick(menu.path)}>
            <menu.icon/>
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack/>
      </div>
    </div>
  );
}

export default SideNav;