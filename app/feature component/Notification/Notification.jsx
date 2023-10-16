import CommunityInvite from "./NotificationTypes/CommunityInvite";
import ReactNotice from "./NotificationTypes/ReactNotice";

export default function Notification({type}) {
    return (
        <div className="rounded-2xl p-2 dark:bg-light-themeBackground/10 dark:hover:bg-light-themeBackground/20 bg-dark-themeBackground/10 hover:bg-dark-themeBackground/20 border-2 border-transparent hover:border-themeMain/50">
            {type === "community" && <CommunityInvite />}
            {type === "reaction" && <ReactNotice />}
        </div>
    )
}