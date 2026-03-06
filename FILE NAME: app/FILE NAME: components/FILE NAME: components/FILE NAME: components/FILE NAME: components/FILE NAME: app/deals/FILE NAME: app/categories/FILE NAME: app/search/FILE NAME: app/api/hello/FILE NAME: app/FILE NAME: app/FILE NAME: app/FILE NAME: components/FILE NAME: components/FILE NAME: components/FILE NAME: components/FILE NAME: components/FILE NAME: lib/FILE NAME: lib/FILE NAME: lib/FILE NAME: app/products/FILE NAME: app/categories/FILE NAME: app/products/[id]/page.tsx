import { products } from "@/lib/products";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Product Not Found</h1>
        <p style={{ opacity: 0.8 }}>This item doesn’t exist or was removed.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "1.5rem",
        }}
      />

      <h1>{product.title}</h1>
      <p style={{ opacity: 0.8, marginBottom: "1rem" }}>{product.price}</p>

      <button
        style={{
          padding: "0.75rem 1.25rem",
          background: "#e50914",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Buy Now
      </button>
    </main>
  );
}
