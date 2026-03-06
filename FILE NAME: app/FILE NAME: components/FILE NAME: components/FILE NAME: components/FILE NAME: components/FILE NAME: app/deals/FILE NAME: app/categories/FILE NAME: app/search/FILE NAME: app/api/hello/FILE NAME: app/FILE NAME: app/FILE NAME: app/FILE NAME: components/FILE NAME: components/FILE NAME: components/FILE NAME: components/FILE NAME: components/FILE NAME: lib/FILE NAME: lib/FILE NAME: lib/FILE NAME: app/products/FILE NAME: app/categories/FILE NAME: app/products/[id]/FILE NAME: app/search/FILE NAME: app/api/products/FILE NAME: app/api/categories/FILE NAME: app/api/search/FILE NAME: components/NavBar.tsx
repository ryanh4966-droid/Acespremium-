import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 1.5rem",
        background: "#000",
        borderBottom: "1px solid #222",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#e50914",
          textDecoration: "none",
        }}
      >
        Aces Premium
      </Link>

      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        <Link href="/products" style={{ color: "#fff", textDecoration: "none" }}>
          Products
        </Link>

        <Link
          href="/categories"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Categories
        </Link>

        <Link href="/search" style={{ color: "#fff", textDecoration: "none" }}>
          Search
        </Link>
      </div>
    </nav>
  );
}
