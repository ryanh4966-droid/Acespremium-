export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "2rem 1.5rem",
        marginTop: "3rem",
        borderTop: "1px solid #222",
        background: "#000",
        textAlign: "center",
        opacity: 0.8,
      }}
    >
      <p style={{ marginBottom: "0.5rem" }}>© {new Date().getFullYear()} Aces Premium</p>
      <p style={{ fontSize: "0.9rem" }}>Cinematic. Intelligent. Premium.</p>
    </footer>
  );
}
