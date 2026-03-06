import { categories } from "@/lib/categories";
import Section from "@/components/Section";

export default function CategoriesPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Categories</h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Explore curated sections across Aces Premium.
      </p>

      {categories.map((cat) => (
        <Section key={cat.id} title={cat.name}>
          <p style={{ opacity: 0.8 }}>{cat.description}</p>
        </Section>
      ))}
    </main>
  );
}
