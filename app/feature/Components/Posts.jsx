import DummyPost from "@/app/feature component/Post Design/Post/DummyPost";
import Post from "@/app/feature component/Post Design/Post/Post";

export default function Posts() {
    return (
        <section className="flex flex-col gap-3 overflow-y-auto h-full scroll-smooth p-2">
            {/* <Post hasComments={true} />
            <Post /> */}
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
        </section>
    );
}