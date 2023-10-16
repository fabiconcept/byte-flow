import PostReactions from "./PostReactions";

export default function DummyComment({isReply}) {
    return (
        <section className="relative overflow-hidden w-full flex flex-col">
            <div className="flex gap-3 px-4 pt-4">
                <div className="flex flex-col items-center gap-1">
                    <div className="animate-pulse w-10 h-10 rounded-full border-2 grid place-items-center overflow-hidden cursor-pointer bg-gray-400">
                    </div>
                    {isReply && <div className="flex-1 w-[2px] bg-gray-400 animate-pulse"></div>}
                </div>
                <div className="grid flex-1 text-sm gap-2">
                    <section className="flex gap-2 items-center mt-2">
                        <div className="overflow-hidden h-2 w-24 rounded-2xl bg-gray-400 animate-pulse"></div>
                        <div className="overflow-hidden h-2 w-10 rounded-2xl bg-gray-400 animate-pulse"></div>
                    </section>
                    <article className="h-6 grid gap-3">
                        <div className="overflow-hidden animate-pulse h-2 w-full rounded-2xl bg-gray-400"></div>
                        <div className="overflow-hidden animate-pulse h-2 w-full rounded-2xl bg-gray-400"></div>
                    </article>
                    <div className="pointer-events-none select-none dark:text-white mt-2 animate-pulse"><PostReactions forComment={true} isReply={isReply} /></div>
                </div>
            </div>
        </section>
    );
}