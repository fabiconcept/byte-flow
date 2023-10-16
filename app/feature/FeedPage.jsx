"use client"
import React, { useState } from "react";
import Posts from "./Components/Posts";
import CreateNewPost from "./Components/CreateNewPost";
import PostView from "./Components/PostView";
import { FaPlus } from "react-icons/fa6";

export const FeedPageContext = React.createContext();

export default function FeedPage() {
    const [currentTab, setCurrentTab] = useState(["home"]);

    const handleBack = () => {
        setCurrentTab((prev) => prev.slice(0, -1));
    }

    const handleNextTab = (newTab) => {
        setCurrentTab((prev) => [...prev, newTab]);
    }

    return (
        <FeedPageContext.Provider value={{ handleBack, handleNextTab }}>

            <div className="border border-themeMain/30 w-full h-full sm:min-w-[29rem] max-w-[35rem] dark:bg-white/10 bg-black/10 rounded-lg backdrop-blur-xl relative  flex-[2_2_0]">
                {currentTab[currentTab.length - 1] === "home" && <Posts />}
                {currentTab[currentTab.length - 1] === "new" && <CreateNewPost />}
                {currentTab[currentTab.length - 1] === "postView" && <PostView />}
                {currentTab[currentTab.length - 1] === "home" && <section className="absolute bottom-3 right-3">
                    <div onClick={()=>handleNextTab("new")}  title="Create Post" className="h-12 w-12 border-2 dark:border-dark-themeBackground border-light-themeBackground grid place-items-center cursor-pointer hover:scale-110 active:scale-90 group rounded-full bg-themeMain text-white text-sm">
                        <FaPlus className="group-active:rotate-45" />
                    </div>
                </section>}
            </div>
        </FeedPageContext.Provider>
    );
}