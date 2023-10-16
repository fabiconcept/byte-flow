import TrendCard from "./components/TrendCard";

export default function TrendingForYou() {
    return (
        <section className={`h-fit flex flex-col text-sm dark:text-white`}>
            <span className={`p-2 font-semibold`}>Trending right now</span>
            <div className={`flex-1 flex flex-col`}>
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <span className={`text-themeMain cursor-pointer p-2 font-semibold`}>...show more</span>
            </div>
        </section>
    );
}