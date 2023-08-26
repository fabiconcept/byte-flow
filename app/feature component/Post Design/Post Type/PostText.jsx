import PostHead from "../Post Components/PostHead";
import PostReactions from "../Post Components/PostReactions";

export default function PostText() {
    return (
        <div className="w-full hover:scale-[1.025] rounded-md p-3 dark:bg-dark-themeBackground/90 bg-white/90 backdrop-blur-md flex flex-col gap-3">
            <PostHead />
            <article className="text-sm px-2 py-1 line-clamp-5">
                If you really just want to filter out the first n character of a file, the tool you want is dd whuch alloes you to specify the number of bllocks to skip. If you want a block size of 1, specify that with bs.
            </article>
            <PostReactions />
        </div>
    )
}