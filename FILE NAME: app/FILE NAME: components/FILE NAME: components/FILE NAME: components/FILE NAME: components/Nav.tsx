export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1.5rem",
        padding: "1rem 1.5rem",
        background: "#0d0d0d",
        borderBottom: "1px solid #222",
      }}
    >
      <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </a>
      <a href="/deals" style={{ color: "#fff", textDecoration: "none" }}>
        Deals
      </a>
      <a href="/categories" style={{ color: "#fff", textDecoration: "none" }}>
        Categories
      </a>
      <a href="/search" style={{ color: "#fff", textDecoration: "none" }}>
        Search
      </a>
    </nav>
  );
}
