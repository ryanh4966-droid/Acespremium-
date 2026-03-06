import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";
import Section from "@/components/Section";

export default function ProductsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>All Products</h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Browse featured items across Aces Premium.
      </p>

      <Section title="Featured Products">
        <Grid columns={2}>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </Grid>
      </Section>
    </main>
  );
}
