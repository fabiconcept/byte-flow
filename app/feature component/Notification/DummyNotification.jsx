export default function DummyNotification() {
    return (
        <div title="Dummy notice" className="dummy relative flex-shrink-0 overflow-hidden h-fit rounded-2xl p-2 dark:bg-light-themeBackground/10 dark:hover:bg-light-themeBackground/20 bg-dark-themeBackground/10 hover:bg-dark-themeBackground/20 border-2 border-transparent hover:border-themeMain/50">
            <div className="flex flex-col gap-3 dark:text-white">
                <div className="flex gap-2 items-center">
                    <div className="animate-pulse w-8 h-8 rounded-full border-2 grid place-items-center overflow-hidden cursor-pointer bg-gray-400">
                    </div>
                    <section className="flex gap-2 flex-col mt-2">
                        <div className="flex gap-2 items-center">
                            <div className="overflow-hidden h-2 w-16 rounded-2xl bg-gray-400 animate-pulse"></div>
                            <div className="overflow-hidden h-2 w-8 rounded-2xl bg-gray-400 animate-pulse"></div>
                        </div>
                        <div className="overflow-hidden h-2 w-20 rounded-2xl bg-gray-400 animate-pulse"></div>
                    </section>
                </div>
                <div className="flex rounded-2xl p-1 h-fit items-center gap-5 bg-dark-themeBackground/30">
                    <div className="flex items-end px-1 gap-2
                     flex-1">
                        <div className="overflow-hidden h-2 w-16 rounded-2xl bg-gray-400 animate-pulse"></div>
                        <div className="overflow-hidden h-2 w-5 rounded-2xl bg-gray-400 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}