import ProfilePic from "./ProfilePic";
import TextContent from "./TextContent";
import Work from "./Works";

export default function Home() {
    return (
        <div className="h-full w-full flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="h-full max-h-[500px] 3xl:max-h-[600px] w-full flex flex-col 2xl:flex-row xs:gap-2 md:gap-5 items-center justify-center mt-10">
                <div className="w-full 2xl:w-[63%] h-fit xl:h-full flex items-center justify-between gap-5">
                    <TextContent />
                    <ProfilePic />
                </div>
                <div className="w-full 2xl:w-[35%] h-fit xl:h-full py-2">
                    <Work />
                </div>
            </div>
        </div>
    )
}