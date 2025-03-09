import {ReactNode} from "react";
import SearchBar from "@/components/search-bar";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <div className={`min-h-[1500px] flex flex-col gap-12`}>
            <SearchBar/>
            {children}
        </div>
    )
}