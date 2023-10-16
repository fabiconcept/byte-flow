import { FaEllipsisVertical } from "react-icons/fa6";
import PostReactions from "./PostReactions";
import BytePic from "@/app/feature component/Display Photos/DP";

export default function MiniComments({isReply}) {
    return (
        <section className="w-full flex flex-col">
            <div className="flex gap-3 px-4 pt-4">
                <div className="flex flex-col items-center gap-1">
                    <BytePic
                        image={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"}
                        type={"comment"}
                    />
                    {isReply && <div className="flex-1 w-[2px] bg-gray-400"></div>}
                </div>
                <div className="grid flex-1 text-sm">
                    <p className="flex gap-2 items-center mt-2">
                        <span className="font-semibold">demnis12</span>
                        <span className="font-thin opacity-50">2h ago</span>
                        <span className="font-semibold text-themeMain px-2 bg-themeMain/10 rounded-md">Author</span>
                    </p>
                    <p className="py-1 line-clamp-2">Okay great that&apos;s all the information i needed to know!</p>
                    <div className="mt-2"><PostReactions forComment={true} isReply={isReply} /></div>
                </div>
                <FaEllipsisVertical className="text-themeMain cursor-pointer" />
            </div>
        </section>
    );
}