import ProfileCard from "./components/ProfileCard";

export default function DiscoverChannels() {
    return (
        <section className={`w-full h-fit flex flex-col text-sm dark:text-white my-3`}>
            <span className={`p-2 font-semibold`}>Recommended channels</span>
            {/* content here */}
            <div className={`overflow-x-auto no-scrollbar w-full flex gap-3 items-center p-3`}>
                <ProfileCard img={"https://source.unsplash.com/random/300x400"} tagname={"ESPN"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x410"} tagname={"Barcelona"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x412"} tagname={"BVB"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x411"} tagname={"Ajax"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x400"} tagname={"ESPN"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x410"} tagname={"Barcelona"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x412"} tagname={"BVB"} />
                <ProfileCard img={"https://source.unsplash.com/random/300x411"} tagname={"Ajax"} />
            </div>
        </section>
    );
}