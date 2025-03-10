import "./globals.css";
import Link from "next/link";
import SnsIcons from "@/components/sns-icons";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className={`font-serif text-[#222831] text-sm lg:text-base`}>
        <div className={`container mx-auto relative`}>
            <header className={`py-8 sticky top-0 left-0 bg-white z-10`}>
                <div className={`flex justify-between items-center`}>
                    <div className={`cursor-pointer`}>
                        <svg className="bi bi-list size-9 fill-[#222831]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                    <Link href={'/'}>
                        <div className={`size-12 rounded-full overflow-hidden`}>
                            <img src="/profile.jpg" alt="logo image"/>
                        </div>
                    </Link>
                </div>
            </header>
            <main>
                {children}
            </main>

        </div>
        <div className={`w-screen bg-[#EEEEEE] py-14`}>
            <div className={`container mx-auto`}>
                <footer>
                    <div className={`flex justify-between items-center`}>
                        <Link href={`mailto:sinyseok7@gmail.com`}>
                            <h4 className={`font-bold text-lg`}>🙋‍♂️ 비즈니스 제안</h4>
                            <p className={`font-semibold`}>📮 sinyseok7@gmail.com</p>
                        </Link>
                        <SnsIcons/>
                    </div>
                </footer>
            </div>
        </div>
        </body>
        </html>
    )
        ;
}
