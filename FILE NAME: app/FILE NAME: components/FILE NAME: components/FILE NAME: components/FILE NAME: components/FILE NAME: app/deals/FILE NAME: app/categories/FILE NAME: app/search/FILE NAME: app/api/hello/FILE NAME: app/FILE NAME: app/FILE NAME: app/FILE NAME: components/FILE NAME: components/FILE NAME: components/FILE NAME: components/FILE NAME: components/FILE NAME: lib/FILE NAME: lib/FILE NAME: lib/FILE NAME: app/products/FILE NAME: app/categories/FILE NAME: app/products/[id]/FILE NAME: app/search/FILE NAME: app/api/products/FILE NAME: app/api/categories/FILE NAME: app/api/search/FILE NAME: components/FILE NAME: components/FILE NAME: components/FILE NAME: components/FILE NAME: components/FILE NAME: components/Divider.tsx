export default function Divider({
  margin = "2rem 0",
  color = "#222",
}: {
  margin?: string;
  color?: string;
}) {
  return (
    <hr
      style={{
        width: "100%",
        border: "none",
        borderTop: `1px solid ${color}`,
        margin,
      }}
    />
  );
}
