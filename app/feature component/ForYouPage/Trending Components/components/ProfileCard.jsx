import BytePic from "@/app/feature component/Display Photos/DP";

export default function ProfileCard({img, tagname}) {
    return (
        <div className={`flex flex-col gap-2 items-center w-fit`}>
            <BytePic
                image={img ? img : ""}
                isVerified={true}
                alt={tagname ? tagname : `account`}
            />
            <span className={`w-9 text-center truncate text-xs`}>{tagname}</span>
        </div>
    )
}