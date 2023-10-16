"use client"
import { useContext } from "react";
import { FeedPageContext } from "../FeedPage";
import { FaAngleLeft, FaEllipsisVertical } from "react-icons/fa6";
import DummyPost from "@/app/feature component/Post Design/Post/DummyPost";
import PostText from "@/app/feature component/Post Design/Post/Post Type/PostText";
import AddCommentBox from "@/app/feature component/Post Design/Post/Post Components/AddCommentBox";
import DummyComment from "@/app/feature component/Post Design/Post/Post Components/DummyComments";

export default function PostView() {
    return (
        <section className="h-full grid grid-rows-[55px_auto_65px] dark:text-white text-sm">
            <HeadPart />
            <section className="overflow-y-auto">
                <DummyPost isFull={true} />
                {/* <PostText isFull={true} /> */}
                <CommentsSection />
            </section>
            <section className="p-1 grid place-items-center border-t dark:bg-dark-themeBackground/20 bg-light-themeBackground/20 sticky bottom-0">
                <AddCommentBox isFull={true} />
            </section>
        </section>
    );
}

function HeadPart() {
    const { handleBack } = useContext(FeedPageContext);
    return (
        <div className="w-full grid grid-cols-[32px_auto_32px] border-b p-2 dark:bg-dark-themeBackground/20 bg-light-themeBackground/20">
            <div className="p-2 rounded-lg active:scale-90 dark:bg-white/10 bg-black/10 hover:dark:bg-white/20 hover:bg-black/20 cursor-pointer grid place-items-center" onClick={handleBack}>
                <FaAngleLeft />
            </div>

            <div className="grid place-items-center font-semibold">Amanda Post</div>

            <div className="p-2 rounded-lg active:scale-90 dark:bg-white/10 bg-black/10 hover:dark:bg-white/20 hover:bg-black/20 cursor-pointer grid place-items-center">
                <FaEllipsisVertical className="text-md cursor-pointer text-themeMain" />
            </div>
        </div>
    );
}

function CommentsSection() {
    return (
        <section className="pb-3">
            <DummyComment />
            <CommentPack />
            <DummyComment />
            <CommentPack />
        </section>
    );
}

function CommentPack() {
    return (
        <section>
            <DummyComment />
            <div className="pl-6">
                <DummyComment isReply={true} />
            </div>
        </section>
    );
}