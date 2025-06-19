import ProfilePic from "./ProfilePic";
import TextContent from "./TextContent";
import Work from "./Works";

export default function Home() {
    return (
        <div className="h-full w-full flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="h-full w-full sm:max-h-[500px] 3xl:max-h-[600px] flex flex-col 2xl:flex-row gap-2 sm:gap-8 lg:gap-4 items-center justify-center mt-10">
                <div className="w-full 2xl:w-fit h-fit xl:h-full flex flex-col-reverse sm:flex-row item-start sm:items-center justify-between gap-13">
                    <TextContent />
                    <ProfilePic />
                </div>
                <div className="w-full 2xl:w-fit h-fit xl:h-full py-2">
                    <Work />
                </div>
            </div>
        </div>
    )
}