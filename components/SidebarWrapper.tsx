import React from 'react';
import { Sidebar } from "./Sidebar";
import MobileSideBar from "./MobileSideBar";

export default function SidebarWrapper() {
    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-row relative w-[200px]">
                <div className="flex flex-row w-full top-[4rem] left-0 h-[calc(100vh-4rem)] w-[200px] overflow-y-auto scrollbar-hidden pb-[5rem] bg-white">
                    <Sidebar />
                </div>
            </div>
            {/* Mobile Sidebar */}
            <div className="md:hidden">
                <MobileSideBar />
            </div>
        </>
    );
} 