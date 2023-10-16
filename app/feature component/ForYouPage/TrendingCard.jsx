import { FaCompass, FaGear } from 'react-icons/fa6';
import SearchBar from './Trending Components/SearchBar';
import TrendingForYou from './Trending Components/TrendingForYou';
import DiscoverChannels from './Trending Components/DiscoverChannels';

export default function Trending() {
    return (
        <section className="border w-full h-fit border-themeMain/30 dark:bg-white/10 bg-black/10 rounded-lg backdrop-blur-xl flex-1 dark:text-white min-w-[15rem] flex-shrink-0 relative flex flex-col">
            <span className='px-3 py-2 text-sm font-semibold dark:text-white w-full flex justify-between items-center border-b dark:border-white/10 border-themeMain/10'>
                <span className={"flex items-center gap-1"}>
                    <FaCompass />
                    Discover
                </span>
                <span title={"Settings"} className='w-[30px] h-[30px] rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer active:scale-90 grid place-items-center dark:text-white group'>
                    <FaGear className='group-active:rotate-90' />
                </span>
            </span>
            <SearchBar />
            <section className={"flex-1 overflow-y-auto flex flex-col gap-2 h-fit"}>
                <TrendingForYou />
            </section>
            <DiscoverChannels />
        </section>
    );
}