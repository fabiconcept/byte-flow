import { useMemo } from "react";
import { FaCheck, FaCodeFork, FaBug } from "react-icons/fa6";

export default function ChallengeCard({ cardNumber, challengeText, status }) {
    const checkBox = useMemo(() => {
        let colorClass = "";
        let toolTip = "";
        switch (status) {
            case 1:
                colorClass = "bg-yellow-400";
                toolTip = "In progress";
                break;
            case 2:
                colorClass = "bg-green-400";
                toolTip = "Completed";
                break;
            case 3:
                colorClass = "bg-red-400";
                toolTip = "Has a bug";
                break;
            default:
                colorClass = "";
                toolTip= "Attempt this";
                break;
        }

        return (<div title={toolTip} className={`w-full h-full grid place-items-center rounded-full ${colorClass} text-white cursor-help`}>
            {status === 2 && <FaCheck className="text-xs" />}
            {status === 3 && <FaBug className="text-xs" />}
        </div>)

    }, [status]);

    return (
        <section className="w-full flex flex-col h-full relative">
            <div className="w-full flex items-center py-2 px-3 border-b bg-themeMain/80">
                <span className="flex-1 font-semibold text-xs">Challenge 00{cardNumber}</span>
                <div className="h-7 w-7 rounded-full bg-black/60 border border-white/25 p-1 grid place-items-center">
                    {checkBox}
                </div>
            </div>

            <div className="flex-1 p-1 grid place-items-center backdrop-blur-lg">
                <div className="text-lg font-semibold line-clamp-5 dark:text-white text-black bg-white/10 grid place-items-center h-full text-center p-2 rounded-b-xl w-full">
                    {challengeText}
                </div>
            </div>

            <div title="Open Editor" className="absolute z-30 bottom-2 right-2 h-10 w-10 border-2 dark:border-dark-themeBackground border-light-themeBackground grid place-items-center cursor-pointer hover:scale-110 active:scale-90 group rounded-full bg-themeMain text-white text-sm">
                <FaCodeFork className="group-active:rotate-12 text-lg" />
            </div>
        </section>
    );
}