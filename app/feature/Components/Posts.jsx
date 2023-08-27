import DummyPost from "@/app/feature component/Post Design/DummyPost";
import Post from "@/app/feature component/Post Design/Post";

export default function Posts() {
    return (
        <section className="flex flex-col gap-3 overflow-y-auto h-full scroll-smooth p-3">
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            <DummyPost />
            {/* <Post hasComments={true} /> */}
            {/* <Post /> */}
        </section>
    );
}