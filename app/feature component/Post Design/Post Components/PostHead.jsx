import { FaEllipsisVertical } from "react-icons/fa6";
import Image from "next/image";

const PostHead = () => {
    return (
        <section className="flex gap-3 items-center">
            <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-themeMain grid place-items-center overflow-hidden cursor-pointer">
                    <Image src={"https://images.unsplash.com/photo-1693246532472-e908036be6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"} height={1000} width={1000} alt="dp" className="w-full aspect-square" />
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <span className="font-semibold">amanda</span>
                    <span className="opacity-50 font-thin">5h ago</span>
                </div>
            </div>
            <FaEllipsisVertical className="text-md cursor-pointer text-themeMain" />
        </section>
    )
}

export default PostHead;