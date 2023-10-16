import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <section className={`w-full p-2 min-h-fit flex-shrink-0 flex items-center gap-1`}>
            <div className={`flex items-center rounded dark:bg-white/5 bg-black/5 flex-1 group focus-within:dark:bg-white/10 focus-within:bg-black/10 border border-transparent focus-within:border-themeMain/60`}>
                <div className={`flex-shrink-0`}>
                    <CiSearch className={`pl-2 text-2xl opacity-50 group-focus-within:opacity-80`} />
                </div>
                <input 
                    type="search"
                    className={`text-sm p-2 bg-transparent flex-1 peer outline-none border-none`}
                    placeHolder={`Search`}
                />
            </div>
        </section>
    );
}