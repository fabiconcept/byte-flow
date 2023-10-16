import BytePic from "../../Display Photos/DP";

export default function CommunityInvite() {
    return (
        <div className="flex flex-col gap-3 dark:text-white">
            <div className="flex gap-2 items-center">
                <BytePic
                    image={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"}
                    type={"notification"}
                    isVerified={true}
                />
                <div className="flex-1 grid">
                    <span className="font-semibold text-sm max-w-[12rem] truncate">UX design Community</span>
                    <span className="text-xs"><span className="opacity-50">community invite</span> <span className="px-2 text-themeMain">3hr ago</span></span>
                </div>
            </div>
            <div className="flex rounded-2xl p-1 items-center justify-end gap-2">
                <div className="px-3 py-2 active:scale-90 text-xs dark:text-white dark:bg-light-themeBackground/10 bg-dark-themeBackground/10 hover:bg-dark-themeBackground/20 dark:hover:bg-light-themeBackground/20 cursor-pointer rounded-lg font-semibold">Decline</div>
                <div className="px-3 py-2 active:scale-90 text-xs text-white bg-themeMain cursor-pointer rounded-lg font-semibold">Accept</div>
            </div>
        </div>
    )
}