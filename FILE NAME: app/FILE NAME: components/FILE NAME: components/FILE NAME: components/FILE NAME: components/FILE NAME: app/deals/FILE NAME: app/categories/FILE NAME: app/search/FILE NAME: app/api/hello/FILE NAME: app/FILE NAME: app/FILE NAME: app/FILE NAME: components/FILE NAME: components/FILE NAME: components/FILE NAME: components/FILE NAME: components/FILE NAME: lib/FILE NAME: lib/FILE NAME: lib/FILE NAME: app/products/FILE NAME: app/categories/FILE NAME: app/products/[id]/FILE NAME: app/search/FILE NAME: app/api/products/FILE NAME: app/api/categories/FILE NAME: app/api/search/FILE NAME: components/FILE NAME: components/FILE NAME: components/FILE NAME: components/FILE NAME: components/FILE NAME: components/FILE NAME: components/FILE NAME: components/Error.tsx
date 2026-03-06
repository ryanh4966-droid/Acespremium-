export default function ErrorMessage({
  title = "Something went wrong",
  message = "Please try again later.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div
      style={{
        padding: "2rem",
        borderRadius: "10px",
        background: "#1a1a1a",
        border: "1px solid #333",
        textAlign: "center",
        margin: "2rem 0",
      }}
    >
      <h2 style={{ color: "#e50914", marginBottom: "0.5rem" }}>{title}</h2>
      <p style={{ opacity: 0.8 }}>{message}</p>
    </div>
  );
}
