import PostText from "../feature component/PostText";

export default function FeedPage() {
    return (
        <div className="w-full max-w-[30rem] dark:bg-white/10 bg-black/10 p-2 rounded-lg backdrop-blur-xl">
            <PostText />
        </div>
    );
}