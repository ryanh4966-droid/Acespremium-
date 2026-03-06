export default function Flex({
  children,
  gap = "1rem",
  justify = "flex-start",
  align = "center",
  wrap = false,
}: {
  children: React.ReactNode;
  gap?: string;
  justify?: string;
  align?: string;
  wrap?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
}
