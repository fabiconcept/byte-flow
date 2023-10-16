import Trending from '../feature component/ForYouPage/TrendingCard';
import Swipers from '../feature component/ForYouPage/Swiper/Swiper';

export default function ForYouPage() {
    return (
        <div className='sm:w-fit w-fit min-w-[20rem] max-w-[35rem] overflow-hidden relative  flex-1'>
            <section className='w-full flex flex-col h-full gap-2 overflow-y-auto'>
                <Swipers />
                <Trending />
            </section>
        </div>
    );
}