import { stripe } from "@/lib/stripe";

export default  async function ProductsPage() {

      const products = await stripe.products.list({
        expand: ["data.default_price"],
      });


    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <PorductList products={products.data} />
        </div>
    );
}