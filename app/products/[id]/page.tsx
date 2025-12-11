import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ui/product-detail";
import { stripe } from "@/lib/stripe";

type ProductPageProps = { params: Promise<{ id: string }> };

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // params is a Promise in the app router
  if (!id) return notFound();

  const product = await stripe.products.retrieve(id, { expand: ["default_price"] });
  const plainproduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainproduct} />;
}