export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 — Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.25rem",
          background: "#e50914",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go Home
      </a>
    </main>
  );
}
