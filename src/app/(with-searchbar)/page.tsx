import data from '@/mock/products.json'
import {Product} from "@/types";
import ProductCard from "@/components/product-card";
import {Metadata} from "next";

const products: Product[] = data;
const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

export const metadata : Metadata = {
    title : "생활하는 남자",
    description: "어디서 생활하냐?",
    openGraph: {
        title: "생활하는 남자",
        description: "어디서 생활하냐?",
        images : ['/ys.jpeg']
    }
}

export default function Page() {
    return (
        <div className={`flex flex-col gap-12 mx-auto`}>
            <section className={`flex flex-col`}>
                <h1 className={`text-center text-2xl font-bold`}>⭐️ 인기 상품</h1>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-14`}>
                    {products.map((product) => <ProductCard key={product.productId} {...product}/>)}
                </div>
            </section>
            <hr/>
            <section className={`flex flex-col gap-12`}>
                <h1 className={`text-center text-2xl font-bold`}>⚡️이런 상품은 어떠세요?</h1>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4`}>
                    {shuffledProducts.map((product) => <ProductCard key={product.productId} {...product}/>)}
                </div>
            </section>
        </div>
    );
}