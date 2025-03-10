'use client'

import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";
import SnsIcons from "@/components/sns-icons";

export default function SearchBar() {

    const [query, setQuery] = useState("");
    const [type, setType] = useState("code");
    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    const router = useRouter();
    const onSubmit = () => {
        if (!query) {
            return;
        }

        if (!type) {
            return
        }
        router.push(`/search?query=${query}&type=${type}`)
    }

    return (
        <div className={`flex flex-col md:w-[50%] mx-auto gap-6`}>
            <p className={`text-center text-lg font-bold`}>
                시청한 영상은 내돈내산 물건 ❤️<br/>
                추후 쿠팡 파트너스 활동으로 일정액의 수수료를 제공 받습니다.
            </p>
            <div className={`mx-auto`}>
                <SnsIcons/>
            </div>
            <nav className={`flex flex-col md:flex-row gap-3`}>
                <select className={`border border-[#EEEEEE] rounded-xl outline-[#00ADB5]`} name="" id=""
                        value={type}
                        onChange={onChangeType}
                >
                    <option value="code">제품코드</option>
                    <option value="name">제품명</option>
                </select>

                <input className={`flex-1 p-3 outline-[#00ADB5] border border-[#EEEEEE] rounded-xl`} type="text" placeholder={`검색어를 입력해주세요.`}
                       value={query}
                       onChange={onChangeQuery}
                />

                <button className={`border p-4 w-[50%] lg:px-3 lg:py-0 lg:w-24 mx-auto bg-[#00ADB5] text-white rounded-2xl cursor-pointer outline-none hover:opacity-50 transition-all duration-500`}
                        onClick={onSubmit}
                >
                    검색하기
                </button>
            </nav>
        </div>
    );
}