import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import fontawesome from '@/fontawesome config/fontawesome'; // Your fontawesome.js file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BytePic from "@/app/feature component/Display Photos/DP";

config.autoAddCss = false;


export default function AddCommentBox({ isFull }) {
    return (
        <section className={`w-full ${isFull ? "" : "px-4 mt-2"} flex gap-2 items-center text-sm`}>
            <BytePic
                image={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"}
                type={"comment"}
            />
            <div className="border-2 border-transparent focus-within:border-themeMain p-1 flex-1 flex items-stretch gap-2 rounded-lg dark:bg-dark-themeBackground/70 bg-light-themeBackground overflow-hidden">
                <input 
                    type="text" 
                    className="flex-1 p-2 bg-transparent outline-none border-none" 
                    placeholder="Enter reply"
                />
                <div className="px-3 py-2 cursor-pointer group active:scale-90 aspect-square place-items-center flex-shrink-0 rounded-md bg-themeMain">
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="text-white group-active:rotate-12 group-active:scale-90 group-hover:scale-125" />
                </div>
            </div>
        </section>
    );
}