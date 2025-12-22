import React from 'react';
import Sidebar from "@/app/includes/frontend/sidebar";


interface RootLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({children}: RootLayoutProps) {
    return (
        <div  className='relative'>
            <div className="flex flex-row  ">
                <Sidebar/>
                <main className="w-full  md:ml-[300px]">
                    <div className=" ">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
