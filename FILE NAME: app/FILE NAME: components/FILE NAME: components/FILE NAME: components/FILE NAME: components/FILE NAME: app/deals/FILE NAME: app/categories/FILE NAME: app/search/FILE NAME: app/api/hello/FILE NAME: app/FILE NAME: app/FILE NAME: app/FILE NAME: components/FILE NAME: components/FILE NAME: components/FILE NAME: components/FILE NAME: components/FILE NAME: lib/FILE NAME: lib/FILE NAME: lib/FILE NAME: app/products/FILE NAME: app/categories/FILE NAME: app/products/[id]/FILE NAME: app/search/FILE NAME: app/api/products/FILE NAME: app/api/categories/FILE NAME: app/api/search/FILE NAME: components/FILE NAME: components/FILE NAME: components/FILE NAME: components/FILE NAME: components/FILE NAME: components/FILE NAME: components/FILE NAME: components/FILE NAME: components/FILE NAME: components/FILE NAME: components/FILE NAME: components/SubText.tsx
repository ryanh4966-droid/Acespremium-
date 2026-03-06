export default function SubText({
  children,
  align = "left",
  opacity = 0.7,
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  opacity?: number;
}) {
  return (
    <p
      style={{
        fontSize: "0.95rem",
        lineHeight: 1.5,
        textAlign: align,
        opacity,
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}
