"use client";

import Stripe from "stripe";
import { useState } from "react";


interface Props {   

    products : Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProducts = products.filter((product) =>{
        const term = searchTerm.toLowerCase();
    }


}