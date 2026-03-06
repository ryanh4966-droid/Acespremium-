export default function Badge({
  children,
  color = "#e50914",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.25rem 0.6rem",
        borderRadius: "6px",
        background: color,
        color: "#fff",
        fontSize: "0.75rem",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}
