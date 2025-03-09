'use client'

import { useState, useEffect } from 'react';
import {Product} from "@/types";
import ProductCard from "@/components/product-card";

export default function RandomProducts({ products }: { products: Product[] }) {
    const [shuffledProducts, setShuffledProducts] = useState([...products]);

    useEffect(() => {
        setShuffledProducts([...products].sort(() => Math.random() - 0.5));
    }, [products]);

    return (
        <section className={`flex flex-col gap-12`}>
            <h1 className={`text-center text-2xl font-bold`}>⚡️이런 상품은 어떠세요?</h1>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4`}>
                {shuffledProducts.map((product) => <ProductCard key={product.productId} {...product}/>)}
            </div>
        </section>
    );
}