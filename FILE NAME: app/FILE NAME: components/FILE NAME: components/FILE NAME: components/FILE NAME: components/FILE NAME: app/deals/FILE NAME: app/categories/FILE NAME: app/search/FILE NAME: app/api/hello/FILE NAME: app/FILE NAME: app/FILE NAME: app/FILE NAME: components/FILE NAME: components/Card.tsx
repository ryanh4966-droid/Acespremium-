export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#111",
        padding: "1.5rem",
        borderRadius: "10px",
        border: "1px solid #222",
        marginBottom: "1.5rem",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
