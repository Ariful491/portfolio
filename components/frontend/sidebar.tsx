'use client';

import React, {useState} from 'react';
import Logo from '@/components/frontend/logo';
import SidebarLink from '@/components/frontend/SidebarLink';
import {
    BoxIso,
    Facebook,
    Github,
    Internet,
    OpenBook,
} from 'iconoir-react';
import {MenuIcon, X, PanelBottomClose} from 'lucide-react';

interface MenuItem {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const menus: MenuItem[] = [
    {name: 'Home', link: '/', icon: <BoxIso/>},
    {name: 'About', link: '#about', icon: <OpenBook/>},
    {name: 'Experience', link: '#experience', icon: <OpenBook/>},
    {name: 'Projects', link: '/', icon: <OpenBook/>},
    {name: 'Services', link: '/', icon: <Internet/>},
];

const Sidebar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <>

            <button
                type="button"
                aria-label="Open Menu"
                onClick={() => setOpenMenu(true)}
                className={`md:hidden fixed top-4 left-4 z-50  bg-white p-2 rounded-md ${openMenu ? 'rotate-190' : 'translate-x-0'}`}

            >
                <MenuIcon
                    className="w-6 h-6  text-gray-500 hover:text-gray-60 transaction-all duration-300 ease-in-out"/>
            </button>


            {openMenu && (
                <div
                    className="fixed inset-0 z-40   bg-gray-50/10 backdrop-blur-2xl md:hidden"
                    onClick={() => setOpenMenu(false)}
                />
            )}


            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-[300px] bg-white
        transform transition-transform duration-1000 ease-in-out
        ${openMenu ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0`}
            >

                <div className="md:hidden flex absolute right-0 bg-gray-100 m-2 rounded-md justify-end p-2">
                    <button
                        type="button"
                        aria-label="Close Menu"
                        onClick={() => setOpenMenu(false)}
                    >
                        <PanelBottomClose className="w-6 h-6 rotate-90 text-gray-500 hover:text-gray-600"/>
                    </button>
                </div>

                <div className="flex flex-col h-full p-2 mx-auto space-y-4 overflow-y-auto">
                    <div className="flex justify-center mt-4">
                        <Logo>.</Logo>
                    </div>

                    <nav className="flex flex-col space-y-2 font-bold text-center mt-6 ">

                        {
                            menus.map((menu, index) =>
                                <SidebarLink key={index}>
                                    <span className="mr-2">{menu.icon}</span>
                                    {menu.name} </SidebarLink>
                            )
                        }


                    </nav>
                    <div className="flex justify-center mt-auto  ">
                        <a className="social-btn"><Github/></a>
                        <a className="social-btn"><Facebook/></a>
                        <a className="social-btn"><Internet/></a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
