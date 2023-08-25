import Image from "next/image";
import { FaEllipsisVertical, FaHeart } from "react-icons/fa6";

export default function PostText() {
    return (
        <div className="w-full rounded-md p-3 dark:bg-dark-themeBackground/90 bg-white/90 backdrop-blur-md flex flex-col gap-3 dark:text-white">
            <PostHead />
            <article className="text-sm px-2 py-1 line-clamp-3">
                If you really just want to filter out the first n character of a file, the tool you want is dd whuch alloes you to specify the number of bllocks to skip. If you want a block size of 1, specify that with bs.
            </article>
            <Reaction />
        </div>
    )
}

const PostHead = () => {
    return (
        <section className="flex gap-3 items-center">
            <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-themeMain grid place-items-center overflow-hidden cursor-pointer">
                    <Image src={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"} height={1000} width={1000} alt="dp" className="w-full aspect-square" />
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <span className="font-semibold">amanda</span>
                    <span className="opacity-50 font-thin">5h ago</span>
                </div>
            </div>
            <FaEllipsisVertical className="text-md cursor-pointer text-themeMain" />
        </section>
    )
}

const Reaction = () => {
    return (
        <section className="flex gap-3 items-center">
            <div className="flex-1 flex gap-2 items-stretch">
                <span></span>
            </div>
            <div className="opacity-60 flex gap-1">
                <span className="font-semibold">1</span>
                <span>reply</span>
            </div>
        </section>
    )
}