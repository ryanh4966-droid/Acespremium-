export default function ShadowCard({
  children,
  padding = "1.25rem",
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        borderRadius: "12px",
        padding,
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        border: "1px solid #1a1a1a",
      }}
    >
      {children}
    </div>
  );
}
