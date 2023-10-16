import PostReactions from "./Post Components/PostReactions";
import "./CSS/dummy.css";

export default function DummyPost({ isFull }) {
    return (
        <div title="Dummy post" className={`dummy relative overflow-hidden flex-shrink-0 w-full border-2 border-transparent ${isFull ? "border-themeMain" : "hover:border-themeMain rounded-md"} p-3 dark:bg-dark-themeBackground/90 bg-white/90 backdrop-blur-md flex flex-col gap-3`}>
            <section className="flex gap-3 items-center">
                <div className="flex-1 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 grid place-items-center overflow-hidden cursor-pointer bg-gray-400">
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <div className="overflow-hidden h-2 w-24 rounded-2xl bg-gray-400"></div>
                        <div className="overflow-hidden h-2 w-10 rounded-2xl bg-gray-400"></div>
                    </div>
                </div>
            </section>
            <article className="px-2 py-1 h-24 grid gap-3">
                <div className="overflow-hidden animate-pulse h-2 w-full rounded-2xl bg-gray-400"></div>
                <div className="overflow-hidden animate-pulse h-2 w-full rounded-2xl bg-gray-400"></div>
                <div className="overflow-hidden animate-pulse h-2 w-full rounded-2xl bg-gray-400"></div>
                <div className="overflow-hidden animate-pulse h-2 w-full delay-100 rounded-2xl bg-gray-400"></div>
            </article>
            <div className="pointer-events-none select-none dark:text-white animate-pulse"><PostReactions /></div>
        </div>
    );
}