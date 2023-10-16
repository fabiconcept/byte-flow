import React from 'react';
import Notification from '../feature component/Notification/Notification';
import DummyNotification from '../feature component/Notification/DummyNotification';
import { FaGear, FaTimeline, FaTrash } from 'react-icons/fa6';

export default function RecentPage() {
    return (
        <div className='border border-themeMain/30 sm:w-fit w-full dark:bg-white/10 bg-black/10 rounded-lg backdrop-blur-xl h-full flex flex-col relative'>
            <span className='px-3 py-2 text-sm font-semibold dark:text-white w-full flex justify-between items-center border-b dark:border-white/10'>
            <span className={"flex items-center gap-1"}>
                    <FaTimeline />
                    Activities
                </span>
                <span title={"Settings"} className='w-[30px] h-[30px] rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer active:scale-90 grid place-items-center dark:text-white group'>
                    <FaGear className='group-active:rotate-90' />
                </span>
            </span>
            <section className='flex-1 p-3 flex flex-col gap-3 overflow-y-auto'>
                <Notification type={"reaction"} />
                <Notification type={"community"} />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
                <DummyNotification />
            </section>
            <div title="Clear Notifications" className="absolute z-30 bottom-3 right-3 h-12 w-12 border-2 dark:border-dark-themeBackground border-light-themeBackground grid place-items-center cursor-pointer hover:scale-110 active:scale-90 group rounded-full bg-themeMain text-white text-sm">
                <FaTrash className="group-active:rotate-12" />
            </div>
        </div>
    );
}