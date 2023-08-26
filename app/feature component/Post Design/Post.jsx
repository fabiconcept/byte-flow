import AddCommentBox from "./Post Components/AddCommentBox";
import MiniComments from "./Post Components/MiniComments";
import PostText from "./Post Type/PostText";

export default function Post({hasComments}) {
    return (
        <div className="w-fit flex-col flex dark:text-white border-2 border-transparent focus-within:border-themeMain pb-2 rounded-lg">
            <PostText />
            {hasComments && <MiniComments />}
            <AddCommentBox />
        </div>
    );
}