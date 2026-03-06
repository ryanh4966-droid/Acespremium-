export default function ProductCard({
  title,
  price,
  image,
}: {
  title: string;
  price: string;
  image: string;
}) {
  return (
    <div
      style={{
        background: "#111",
        padding: "1rem",
        borderRadius: "10px",
        border: "1px solid #222",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      <h4 style={{ margin: 0 }}>{title}</h4>

      <p style={{ margin: 0, opacity: 0.8 }}>{price}</p>

      <button
        style={{
          marginTop: "0.5rem",
          padding: "0.6rem 1rem",
          background: "#e50914",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        View Product
      </button>
    </div>
  );
}
