import React from 'react';
import Sidebar from "@/components/frontend/sidebar";
import CursorShadow from "@/components/ui/CursorShadow";
import CustomCursor from "@/components/ui/CustomCursor";


interface RootLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({children}: RootLayoutProps) {
    return (
        <div  className='relative  bg-gray-100'>
            <CursorShadow/>

            <Sidebar/>
            <div className="flex flex-row  ">
                <main className="w-full  md:ml-[300px]">
                    <div className=" ">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
