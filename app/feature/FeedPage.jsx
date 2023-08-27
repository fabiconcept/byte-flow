"use client"
import React, { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import CreateNewPost from "./Components/CreateNewPost";

export const FeedPageContext = React.createContext();

export default function FeedPage() {
    const [currentTab, setCurrentTab] = useState(["home", "new"]);

    const handleBack = () => {
        setCurrentTab((prev) => prev.slice(0, -1));
    }
    
    const handleNextTab = (newTab) => {
        setCurrentTab((prev) => [...prev, newTab]);
    }

    return (
        <FeedPageContext.Provider value={{ handleBack, handleNextTab }}>

        <div className="w-full max-w-[29rem] dark:bg-white/10 bg-black/10 rounded-lg backdrop-blur-xl">
                {currentTab[currentTab.length - 1] === "home" && <Posts />}
                {currentTab[currentTab.length - 1] === "new" && <CreateNewPost />}
        </div>
        </FeedPageContext.Provider>
    );
}