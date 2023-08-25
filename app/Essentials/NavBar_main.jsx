import { GiSnakeBite } from "react-icons/gi";
import ModeSwitch from "./components/ModeSwitch";
import AppsTray from "./components/AppsTray";

export default function NavBar_main() {
    return (
        <div className="dark:text-white h-full dark:bg-white/10 bg-black/10 w-fit backdrop-blur-xl flex flex-col items-center rounded-xl border border-white/10 overflow-hidden">
            <div className="w-full py-8 bg-themeMain text-white">
                <GiSnakeBite className="sm:text-[2.5rem] text-3xl mx-auto mix-blend-screen select-none cursor-pointer" />
            </div> 
            <AppsTray />
            <ModeSwitch />
        </div>
    );
}