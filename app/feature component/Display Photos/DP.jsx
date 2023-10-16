"use client"
import Image from "next/image";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa6";

export default function BytePic({ type, isVerified, image}) {
    const imageSize = useMemo(() => {
        switch (type) {
            case "post":
                return "w-10 h-10 border-2 border-themeMain";
            case "comment":
                return "w-9 h-9";
            case "notification":
                return "w-8 h-8";
            case "profile":
                return "w-12 h-12";

            default:
                return "w-10 h-10";
        }
    }, [type]);

    return (
        <section className="relative">
            <div className={`${imageSize} rounded-full grid place-items-center overflow-hidden cursor-pointer`}>
                <Image src={image} height={1000} width={1000} alt="dp" className="w-full aspect-square" />
            </div>
            {isVerified && <div className="absolute -bottom-0.5 right-0.5 dark:border-dark-themeBackground border-light-themeBackground border-2 rounded-full bg-themeMain text-white grid place-items-center h-4 w-4">
                <FaStar className="text-[10px]" />
                &apos;
            </div>}
        </section>
    )
}