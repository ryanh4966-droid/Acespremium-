export default function Container({
  children,
  width = "800px",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div
      style={{
        maxWidth: width,
        margin: "0 auto",
        padding: "0 1.5rem",
      }}
    >
      {children}
    </div>
  );
}
