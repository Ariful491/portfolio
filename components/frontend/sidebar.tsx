'use client'

import Logo from "@/components/frontend/logo";
import SidebarLink from "@/components/frontend/SidebarLink";
import React from "react";
import {BoxIso, Facebook, Github, Internet, OpenBook} from "iconoir-react";
import {usePathname} from 'next/navigation'
import {ExpandIcon, Webhook} from "lucide-react";


export default function Sidebar() {
    const pathName = usePathname()

    const menus: {
        name: string;
        link: string;
        icon: React.ReactNode;
    }[] = [
        {
            name: "Home",
            link: "/",
            icon: <BoxIso></BoxIso>,
        },
        {
            name: "About",
            link: "#about",
            icon: <OpenBook></OpenBook>,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <ExpandIcon></ExpandIcon>,
        },
        {
            name: "Projects",
            link: "/",
            icon: <Webhook></Webhook>,
        },
        {
            name: "Services",
            link: "/",
            icon: <Internet></Internet>,
        },
    ];



    return (
        <div className="">
            <div
                className=" hidden md:block    fixed h-screen w-[300px] bg-white  transform -translate-x-full md:translate-x-0    transition-all duration-500">
                <aside className="fixed h-screen w-[300px]   animate-slide-in-from-left flex flex-col    ">

                    <div className="p-2">
                        <div className="flex justify-center rounded-full mt-10">
                            <Logo>  </Logo>
                        </div>

                        <div className="flex flex-col space-y-1 font-bold   text-center mt-4">
                            {
                                menus.map((menu, index) =>
                                    <SidebarLink key={index} >
                                        <span className="mr-2">{menu.icon}</span>
                                        {menu.name} </SidebarLink>
                                )
                            }

                        </div>

                    </div>

                    <div className="flex justify-center mt-auto mb-5">
                        <a href="https://github.com/ " target="_blank"
                           className="text-gray-500 h-12 w-12 mx-2  bg-gray-100 shadow-xl rounded-full   items-center flex  justify-center      hover:bg-amber-400 hover:text-white">
                            <Github className=""/>
                        </a>
                        <a href="https://github.com/ " target="_blank"
                           className="text-gray-500 h-12 w-12 mx-2  bg-gray-100 shadow-xl rounded-full   items-center flex  justify-center      hover:bg-amber-400 hover:text-white">
                            <Facebook className="h-6 w-6"/>
                        </a>
                        <a href="https://github.com/ " target="_blank"
                           className="text-gray-500 h-12 w-12  mx-2 bg-gray-100 shadow-xl rounded-full   items-center flex  justify-center      hover:bg-amber-400 hover:text-white">
                            <Internet className="h-6 w-6"/>  
                        </a>
                    </div>
                </aside>

            </div>
        </div>

    )

}
