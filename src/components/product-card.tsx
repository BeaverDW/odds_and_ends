import Link from "next/link";
import {Product} from "@/types";
import Image from "next/image";

export default function ProductCard({
                                        productId,
                                        code,
                                        name,
                                        description,
                                        thumbnailURL,
                                        linkURL
                                    }: Product
) {
    return (
        <Link className="p-3 gap-4 overflow-hidden w-[250px] rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-150 group" href={linkURL}>
            <div className="flex flex-col">
                <div className="h-[250px] w-full relative">
                    <Image
                        src={thumbnailURL}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                        priority
                    />
                </div>
                <div className="min-h-[100px] flex flex-col gap-3 py-3">
                    <div>
                        <h2 className="inline-block rounded-full py-1 px-3 bg-[#00ADB5] text-white text-xs">
                            #{code}
                        </h2>
                    </div>
                    <div className="border-y py-2 border-[#EEEEEE]">
                        <h3 className="text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap group-hover:text-[#00ADB5]">
                            {name}
                        </h3>
                        <p className="text-sm text-[#393E46] text-ellipsis overflow-hidden whitespace-nowrap">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}