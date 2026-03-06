"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p style={{ opacity: 0.8 }}>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.25rem",
          background: "#e50914",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </main>
  );
}
