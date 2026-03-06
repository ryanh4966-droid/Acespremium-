export default function Grid({
  children,
  columns = 2,
}: {
  children: React.ReactNode;
  columns?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}
