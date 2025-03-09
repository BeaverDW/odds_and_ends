import ProductCard from "@/components/product-card";
import data from '@/mock/products.json'
import {Product} from "@/types";
import {Metadata} from "next";

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

export default async function Page({
    searchParams
                             }: {
    searchParams: Promise<{
        query: string;
        type: string;
    }>
}) {

    const {query, type} = await searchParams;

    const filteredProducts = products.filter((product) => {
        if(type === 'code') {
            return product.code.includes(query);

        }
        return product.name.includes(query);
    });


    return (
      <div className={`flex flex-col gap-12 mx-auto`}>
          <section className={`flex flex-col`}>
              <h1 className={`text-center text-2xl font-bold`}>💡 검색결과</h1>
              <p className={`text-center`}>{filteredProducts.length}건의 검색결과가 존재합니다.</p>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-14`}>
                  {filteredProducts.map((product) => <ProductCard key={product.productId} {...product}/>)}
              </div>
          </section>
      </div>
    );
}