export default function Headline({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}) {
  return (
    <h1
      style={{
        fontSize: "2rem",
        fontWeight: 800,
        marginBottom: "1.5rem",
        textAlign: align,
        color: "#fff",
        letterSpacing: "-0.5px",
      }}
    >
      {children}
    </h1>
  );
}
