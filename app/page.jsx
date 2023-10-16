import NavBar_main from "./Essentials/NavBar_main";
import ForYouPage from "./feature/ForYouPage";
import FeedPage from "./feature/FeedPage";
import RecentPage from "./feature/RecentPage";
import Ball from "./mini elements/Ball";

export default function HomePage() {
    return (
        <div className="max-h-screen h-screen dark:bg-dark-themeBackground bg-light-themeBackground overflow-hidden text-[500]">
            <main className="h-full w-full z-10 relative p-2 flex gap-2 flex-shrink-0">
                <NavBar_main />
                <div className="h-full flex-1 relative flex gap-2">
                    <FeedPage />
                    <ForYouPage />
                    <RecentPage />
                </div>
            </main>
            <Ball />
        </div>
    );
}