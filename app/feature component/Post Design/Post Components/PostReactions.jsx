"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import fontawesome from '@/fontawesome config/fontawesome'; // Your fontawesome.js file

config.autoAddCss = false;

export default function PostReactions() {
    const [reactions, setReactions] = useState({
        liked: false,
        disliked: false,
        favorite: false,
        ban: false,
        retweeted: false,
    });

    return (
        <section className="flex gap-4 items-center">
            <div className="flex-1 flex gap-8 items-stretch mx-2 dark:text-white text-gray-400">
                <span
                    onClick={() => setReactions((prev) => ({ ...prev, liked: !prev.liked, disliked: false }))}
                    className={`cursor-pointer px-[0.25rem] group rounded-lg ${reactions.liked ? "bg-dark-themeBackground/20 dark:bg-light-themeBackground/10 scale-125" : "hover:bg-dark-themeBackground/5 dark:hover:bg-light-themeBackground/10 hover:scale-110"} active:scale-90`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-heart" className={`${reactions.liked ? "text-red-500 rotate-0" : "group-hover:text-red-200 -rotate-12 group-active:rotate-0"}`} />
                </span>
                <span
                    onClick={() => setReactions((prev) => ({ ...prev, liked: false, disliked: !prev.disliked }))}
                    className={`cursor-pointer px-[0.25rem] group rounded-lg ${reactions.disliked ? "bg-dark-themeBackground/20 dark:bg-light-themeBackground/10 scale-125" : "hover:bg-dark-themeBackground/5 dark:hover:bg-light-themeBackground/10 hover:scale-110"} active:scale-90`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className={`${reactions.disliked ? "text-gray-500 rotate-0" : "group-hover:text-gray-200 -rotate-12 group-active:rotate-0"}`} />
                </span>
                <span
                    onClick={() => setReactions((prev) => ({ ...prev, favorite: !prev.favorite }))}
                    className={`cursor-pointer px-[0.25rem] group rounded-lg ${reactions.favorite ? "bg-dark-themeBackground/20 dark:bg-light-themeBackground/10 scale-125" : "hover:bg-dark-themeBackground/5 dark:hover:bg-light-themeBackground/10 hover:scale-110"} active:scale-90`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-star" className={`${reactions.favorite ? "text-yellow-500 rotate-0" : "group-hover:text-yellow-200 -rotate-12 group-active:rotate-0"}`} />
                </span>
                <span
                    onClick={() => setReactions((prev) => ({ ...prev, ban: !prev.ban }))}
                    className={`cursor-pointer px-[0.25rem] group rounded-lg ${reactions.ban ? "bg-dark-themeBackground/20 dark:bg-light-themeBackground/10 scale-125" : "hover:bg-dark-themeBackground/5 dark:hover:bg-light-themeBackground/10 hover:scale-110"} active:scale-90`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-ban" className={`${reactions.ban ? "text-red-500 rotate-0" : "group-hover:text-red-200 -rotate-12 group-active:rotate-0"}`} />
                </span>
                <span
                    onClick={() => setReactions((prev) => ({ ...prev, retweeted: !prev.retweeted }))}
                    className={`cursor-pointer px-[0.25rem] group rounded-lg ${reactions.retweeted ? "bg-dark-themeBackground/20 dark:bg-light-themeBackground/10 scale-125" : "hover:bg-dark-themeBackground/5 dark:hover:bg-light-themeBackground/10 hover:scale-110"} active:scale-90`}
                >
                    <FontAwesomeIcon icon="fa-solid fa-retweet" className={`${reactions.retweeted ? "text-green-500 rotate-0" : "group-hover:text-green-300 -rotate-12 group-active:rotate-0"}`} />
                </span>
            </div>
            <div className="opacity-60 flex gap-1 cursor-pointer hover:opacity-80 text-sm">
                <span className="font-semibold">1</span>
                <span>reply</span>
            </div>
        </section>
    );
}