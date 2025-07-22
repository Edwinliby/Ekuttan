import ProfilePic from "./ProfilePic";
import TextContent from "./TextContent";
import Work from "./Works";

export default function Home() {
    return (
        <div className="h-full w-full flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="sm:h-full w-full max-w-[1400px] sm:max-h-[500px] 3xl:max-h-[600px] flex flex-col lg:flex-row sm:gap-8 items-center justify-center mt-10">
                <div className="flex-1 sm:h-full">
                    <TextContent />
                </div>
                <div className="hidden 2xl:flex flex-1">
                    <ProfilePic />
                </div>
                <div className="flex-1 sm:h-full">
                    <Work />
                </div>
            </div>
        </div>
    )
}