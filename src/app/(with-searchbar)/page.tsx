import data from '@/mock/products.json'
import {Product} from "@/types";
import ProductCard from "@/components/product-card";
import {Metadata} from "next";
import RandomProducts from '@/components/random-products';

const products: Product[] = data;

export const metadata : Metadata = {
    title : "잡것을 리뷰합니다",
    description: "이 세상 모든 잡것들을 리뷰합니다",
    icons: {
        icon: '/icon.ico'
    },
    openGraph: {
        title: "잡것을 리뷰합니다",
        description: "이 세상 모든 잡것들을 리뷰합니다",
        images : ['/openGraph.jpg']
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
            <RandomProducts products={products} />
        </div>
    );
}