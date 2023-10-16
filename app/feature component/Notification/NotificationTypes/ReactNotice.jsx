import BytePic from "../../Display Photos/DP";

export default function ReactNotice() {
    return (
        <div className="flex flex-col gap-3 dark:text-white">
            <div className="flex gap-2 items-center">
                <BytePic
                    image={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"}
                    type={"notification"}
                />
                <div className="flex-1 grid">
                    <span className="font-semibold text-sm w-[10rem] truncate">Rosaline Kumbirai</span>
                    <span className="text-xs">
                        <span className="opacity-50">Liked your post</span> 
                        <span className="px-2 text-[color-mix(#5869EA,white)]">1hr ago</span>
                    </span>
                </div>
            </div>
            <div className="flex rounded-2xl p-1 items-center gap-5 bg-dark-themeBackground/30">
                <div className="flex items-end px-3 flex-1">
                    <span className="text-[12px] font-semibold">3.5K</span>
                    <span className="ml-1 text-xs opacity-40">likes</span>
                </div>
                <div className="px-3 py-2 active:scale-90 text-xs text-white bg-themeMain cursor-pointer rounded-xl font-semibold">view</div>
            </div>
        </div>
    )
}