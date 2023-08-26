import NavBar_main from "./Essentials/NavBar_main";
import FeedPage from "./feature/FeedPage";
import Ball from "./mini elements/Ball";

export default function HomePage() {
    return (
        <div className="max-h-screen h-screen dark:bg-dark-themeBackground bg-light-themeBackground overflow-hidden text-[500]">
            <main className="h-full w-full z-10 relative p-2 flex gap-2">
                <NavBar_main />
                <FeedPage />
            </main>
            <Ball />
        </div>
    );
}