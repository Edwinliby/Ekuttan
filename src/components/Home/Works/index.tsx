import Marquee from "react-fast-marquee";
import Image from "next/image";
import { exp, works } from "./const";

export default function Work() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row xl:flex-col gap-3 xs:gap-5">
            <div className="xs:h-full xl:h-fit w-full lg:w-1/2 xl:w-full shadow-lg rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 px-3 xs:px-4 bg-gradient-to-b from-[#F0F0F0] to-[#F5F5F5]">
                <p className="z-10 w-fit relative shadow px-4 py-2 text-xs xl:text-sm rounded-3xl bg-white">My Experience</p>
                <div className="overflow-x-auto xl:overflow-visible h-[5rem] xs:h-[7.5rem] md:h-full lg:h-[7.5rem] xl:h-fit relative pb-2">
                    <span className="z-0 absolute left-6.25 block w-0.5 xl:w-[2.5px] h-[calc(100%+6rem)] xs:h-[calc(100%+2rem)] sm:h-[70%] lg:h-[calc(100%+2rem)] xl:h-[80%] bg-[#c0c0c0]" />
                    {
                        exp.map((item) => (
                            <div key={item.id} className="z-10 relative flex items-start gap-4 pt-6 pl-5">
                                <span className="rounded-full w-3 h-3 bg-black" />
                                <div className="relative -top-1.5">
                                    <b>{item.title}</b>
                                    <p className="text-xs text-[#919191]">{item.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="overflow-hidden w-full lg:w-1/2 xl:w-full h-full relative shadow-lg rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 bg-gradient-to-b from-[#F0F0F0] to-[#F5F5F5]">
                <p className="z-10 w-fit relative left-3 xs:left-4 shadow px-4 py-2 text-xs xl:text-sm rounded-3xl bg-white">My Works & Projects</p>
                <Marquee speed={50} gradient={false} pauseOnHover={true} className="overflow-hidden w-full h-full absolute bottom-0 left-0">
                    {
                        works.map((item, i) => (
                            <div
                                key={i}
                                className={`w-[6rem] h-[6rem] xs:w-[8rem] xs:h-[8rem] 3xl:w-[12rem] 3xl:h-[12rem] flex items-center justify-center ${i !== 0 ? '-ml-8' : ''}`}
                            >
                                <Image
                                    src={item.src}
                                    alt='company'
                                    width={500}
                                    height={500}
                                    draggable={false}
                                    className="w-fit h-fit saturate-0 active:saturate-100 hover:saturate-100 object-contain shadow-xl rounded -rotate-6 translate-y-2 hover:-translate-y-3 active:-translate-y-3 transition-all duration-300 ease-in-out"
                                />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}