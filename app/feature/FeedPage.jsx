import DummyPost from "../feature component/Post Design/DummyPost";
import Post from "../feature component/Post Design/Post";

export default function FeedPage() {
    return (
        <div className="w-full max-w-[29rem] dark:bg-white/10 bg-black/10 p-3 rounded-lg backdrop-blur-xl flex flex-col gap-3 overflow-y-auto scroll-smooth">
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            {/* <Post hasComments={true} />
            <Post /> */}
        </div>
    );
}