export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "#fff",
        }}
      >
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}
