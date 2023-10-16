import { FaEllipsisVertical } from "react-icons/fa6";

export default function TrendCard() {
    return (
        <div className={`w-full flex items-center dark:hover:bg-white/5 hover:bg-black/5 border-b last:border-transparent dark:border-white/10 border-black/10 py-1 px-3`}>
            <div className={`flex-1 grid cursor-pointer`}>
                <span className={`opacity-50 text-xs w-52 truncate`}>Trending in Nigeria</span>
                <span className={`font-semibold w-60 truncate`}>
                    Selena x Rema (Calm down)
                </span>
                <span className={`opacity-50 text-xs font-light w-60 truncate`}>538K posts</span>
            </div>
            <div className={`rounded-md p-2 grid place-items-center opacity-60 bg-transparent hover:opacity-100 dark:hover:bg-white/5 hover:bg-black/5 cursor-pointer active:scale-90`}>
                <FaEllipsisVertical />
            </div>
        </div>
    );
}