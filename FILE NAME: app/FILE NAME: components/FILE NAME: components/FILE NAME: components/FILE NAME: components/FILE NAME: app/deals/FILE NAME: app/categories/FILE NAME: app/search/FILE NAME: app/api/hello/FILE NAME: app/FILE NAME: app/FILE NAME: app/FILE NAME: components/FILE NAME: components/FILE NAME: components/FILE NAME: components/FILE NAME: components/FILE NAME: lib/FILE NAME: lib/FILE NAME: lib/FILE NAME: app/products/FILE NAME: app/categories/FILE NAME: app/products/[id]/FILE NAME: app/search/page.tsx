"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Search</h1>

      <input
        type="text"
        placeholder="Search products…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      />

      {filtered.length === 0 && (
        <p style={{ opacity: 0.8 }}>No results found.</p>
      )}

      <Grid columns={2}>
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </Grid>
    </main>
  );
}
