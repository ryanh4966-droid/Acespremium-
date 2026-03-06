export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem",
        background: "#111",
        borderTop: "1px solid #222",
        marginTop: "2rem",
        textAlign: "center",
        fontSize: "0.9rem",
        opacity: 0.7,
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Aces Premium</p>
    </footer>
  );
}
