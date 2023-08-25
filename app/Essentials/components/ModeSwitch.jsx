"use client"
import { useState } from "react";
import { CiCloudMoon, CiSun } from "react-icons/ci";
export default function ModeSwitch() {
    const [currentMode, setCurrentMode] = useState(1);

    return (
        <div className="dark:bg-dark-themeBackground bg-light-themeBackground w-fit h-fit flex flex-col rounded-3xl relative group my-6" >
            <div className={`${currentMode === 0 ? "dark:text-black text-dark-textColor" : ""} active:scale-90 active:op cursor-pointer relative z-10 h-8 w-8 rounded-full grid place-items-center`} onClick={()=>setCurrentMode(0)}>
                <CiSun className={`${currentMode === 0 ? "scale-125" : ""} duration-0 text-xl`} />
            </div>
            <div className={`${currentMode === 1 ? "dark:text-black text-dark-textColor" : ""} active:scale-90 active:op cursor-pointer relative z-10 h-8 w-8 rounded-full grid place-items-center`} onClick={()=>setCurrentMode(1)}>
                <CiCloudMoon className={`${currentMode === 1 ? "scale-125" : ""} duration-0 text-xl`} />
            </div>
            <div className={`${currentMode === 0 ? "top-0" : " translate-y-[calc(100%+0.15rem)]"} group-active:scale-90 dark:bg-white bg-dark-themeBackground left-0 absolute h-8 w-8 rounded-full grid place-items-center`} onClick={()=>setCurrentMode(0)}>
            </div>
        </div>
    );
}