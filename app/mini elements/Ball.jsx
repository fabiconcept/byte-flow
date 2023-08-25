"use client"
import { useState, useEffect } from 'react';
import { GiAtom } from "react-icons/gi";
import './../styles/MouseFollow.css'; // You can define your CSS styles in this file

const Ball = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const offset = -200;
            const divWidth = 200;
            const divHeight = 100;

            const newX = Math.min(
                window.innerWidth - divWidth - offset,
                Math.max(offset, event.clientX - divWidth / 2)
            );
            const newY = Math.min(
                window.innerHeight - divHeight - offset,
                Math.max(offset, event.clientY - divHeight / 2)
            );

            setPosition({ x: newX, y: newY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='absolute h-screen w-screen overflow-hidden top-0 left-0 pointer-events-none select-none'>
            <div className="mouse-follower text-white absolute ease-linear duration-200 dark:bg-white/10 bg-black/10 dark:mix-blend-color-dodge mix-blend-normal" style={{ top: position.y, left: position.x }}></div>
            <div className="h-24 w-24 absolute ease-linear duration-150 rounded-full border dark:border-white/20 border-black/dark:border-white/20" style={{ top: position.y+7, left: position.x+48 }}></div>
            <div className="h-14 w-14 absolute ease-linear duration-100 rounded-full border dark:border-white/30 border-black/30" style={{ top: position.y+27, left: position.x+76 }}></div>
            <div className="grid place-items-center h-10 w-10 absolute ease-linear duration-75 rounded-full dark:bg-white/40 bg-black/50" style={{ top: position.y+35, left: position.x+85 }}>
                <GiAtom className='text-3xl' />
            </div>
        </div>
    );
};

export default Ball;
