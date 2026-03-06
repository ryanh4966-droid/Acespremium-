"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Search</h1>
      <p>Find products across Aces Premium.</p>

      <input
        type="text"
        placeholder="Search for anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginTop: "1rem",
          borderRadius: "6px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
        }}
      />

      {query && (
        <p style={{ marginTop: "1rem", opacity: 0.7 }}>
          Searching for: <strong>{query}</strong>
        </p>
      )}
    </main>
  );
}
