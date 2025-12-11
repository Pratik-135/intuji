import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ui/product-list";

export default  async function ProductsPage() {

      const products = await stripe.products.list({
        expand: ["data.default_price"],
      });


    return (
        <div>
            <h1 className=" text-center text-3xl font-bold mb-6 mt-2 py-2">All of Our Products</h1>
            <ProductList products={products.data} />
        </div>
    );
}