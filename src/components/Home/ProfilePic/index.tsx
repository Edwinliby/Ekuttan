import Image from "next/image";
import Pic from '@/../public/pic.webp';

export default function ProfilePic() {
    return (
        <div className="hidden md:block w-fit h-[20rem] xl:h-full border-[6px] border-white bg-gradient-to-br from-[#FFFFFF] via-[#dfdfdf] to-[#C0C0C0] rounded-4xl overflow-hidden shadow-xl">
            <Image
                src={Pic}
                alt="hero"
                width={800}
                height={800}
                className="w-full h-full"
            />
        </div>
    )
}