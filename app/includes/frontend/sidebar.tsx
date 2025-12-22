import Logo from "@/app/includes/frontend/logo";
import SidebarLink from "@/app/includes/frontend/SidebarLink";
import React from "react";
import {BoxIso, Facebook, Github, Internet, OpenBook} from "iconoir-react";
import {usePathname} from 'next/navigation'
import {Webhook} from "lucide-react";


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
            name: "Projects",
            link: "/",
            icon: <Webhook></Webhook>,
        },
        {
            name: "Services",
            link: "/",
            icon: <Internet></Internet>,
        },
        {
            name: "About",
            link: "/",
            icon: <OpenBook></OpenBook>,
        }
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
                           className="text-black shadow-lg mr-1 border-2 rounded-full p-2   bg-gray-100 hover:text-gray-600">
                            <Github className="h-6 w-6"/>
                        </a>
                        <a href="https://github.com/ " target="_blank"
                           className="text-white shadow-lg mr-1 border-2 rounded-full p-2   bg-blue-600 hover:text-blue-600 hover:bg-white">
                            <Facebook className="h-6 w-6"/>
                        </a>
                        <a href="https://github.com/ " target="_blank"
                           className="text-black shadow-lg mr-1 border-2 rounded-full p-2   bg-gray-100 hover:text-gray-600">
                            <Internet className="h-6 w-6"/>  
                        </a>
                    </div>
                </aside>

            </div>
        </div>

    )

}
