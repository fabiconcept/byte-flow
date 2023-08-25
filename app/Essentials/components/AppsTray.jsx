"use client"
import { FiHome, FiGrid, FiMessageSquare, FiTerminal } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function AppsTray() {
    const [activeApp, setActiveApp] = useState(0);
    return (
        <main className="flex-1 border-y p-2 flex flex-col justify-between py-6 overflow-y-auto">
            <section className="flex flex-col justify-center flex-1 gap-6 p-1 relative after:w-full after:h-10 after:bg-gradient-to-b after:top-0 after:left-0">
                <div
                    className={` border-2  border-transparent ${activeApp === 0 ? "text-white scale-[1.35] bg-themeMain dark:shadow-white/50 shadow-black/70 border-white" : " hover:scale-105 dark:hover:shadow-white/50 hover:shadow-black/50 dark:bg-light-themeBackground/60 hover:bg-themeMain/50 dark:text-black text-white bg-dark-themeBackground/60"} min-w-full w-fit p-2 aspect-square grid place-items-center rounded-2xl  cursor-pointer hover:shadow-lg active:scale-95 active:shadow-inner`}
                    onClick={()=>setActiveApp(0)}
                >
                    <FiHome className={`${activeApp === 0 ? "text-white" : "dark:text-dark-themeBackground"} sm:text-xl text-sm group-hover:scale-125`} />
                </div>
                <div
                    className={` border-2  border-transparent ${activeApp === 1 ? "text-white scale-[1.35] bg-themeMain dark:shadow-white/50 shadow-black/70 border-white" : " hover:scale-105 dark:hover:shadow-white/50 hover:shadow-black/50 dark:bg-light-themeBackground/60 hover:bg-themeMain/50 dark:text-black text-white bg-dark-themeBackground/60"}  min-w-full w-fit p-2 aspect-square grid place-items-center rounded-2xl  cursor-pointer hover:shadow-lg active:scale-95 active:shadow-inner`}
                    onClick={()=>setActiveApp(1)}
                >
                    <FiGrid className={`${activeApp === 1 ? "text-white" : "dark:text-dark-themeBackground"} sm:text-xl text-sm group-hover:scale-125`} />
                </div>
                <div
                    className={` border-2  border-transparent ${activeApp === 2 ? "text-white scale-[1.35] bg-themeMain dark:shadow-white/50 shadow-black/70 border-white" : " hover:scale-105 dark:hover:shadow-white/50 hover:shadow-black/50 dark:bg-light-themeBackground/60 hover:bg-themeMain/50 dark:text-black text-white bg-dark-themeBackground/60"}  min-w-full w-fit p-2 aspect-square grid place-items-center rounded-2xl  cursor-pointer hover:shadow-lg active:scale-95 active:shadow-inner`}
                    onClick={()=>setActiveApp(2)}
                >
                    <FiMessageSquare className={`${activeApp === 2 ? "text-white" : "dark:text-dark-themeBackground"} sm:text-xl text-sm group-hover:scale-125`} />
                </div>
                <div
                    className={` border-2  border-transparent ${activeApp === 3 ? "text-white scale-[1.35] bg-themeMain dark:shadow-white/50 shadow-black/70 border-white" : " hover:scale-105 dark:hover:shadow-white/50 hover:shadow-black/50 dark:bg-light-themeBackground/60 hover:bg-themeMain/50 dark:text-black text-white bg-dark-themeBackground/60"}  min-w-full w-fit p-2 aspect-square grid place-items-center rounded-2xl  cursor-pointer hover:shadow-lg active:scale-95 active:shadow-inner`}
                    onClick={()=>setActiveApp(3)}
                >
                    <FiTerminal className={`${activeApp === 3 ? "text-white" : "dark:text-dark-themeBackground"} sm:text-xl text-sm group-hover:scale-125`} />
                </div>
            </section>
            <div className="w-10 h-10 group grid flex-shrink-0 place-items-center rounded-full mx-auto bg-themeMain text-white cursor-pointer active:scale-90">
                <FaPlus className="group-hover:scale-125 group-active:animate-pulse" />
            </div>
        </main>
    );
}