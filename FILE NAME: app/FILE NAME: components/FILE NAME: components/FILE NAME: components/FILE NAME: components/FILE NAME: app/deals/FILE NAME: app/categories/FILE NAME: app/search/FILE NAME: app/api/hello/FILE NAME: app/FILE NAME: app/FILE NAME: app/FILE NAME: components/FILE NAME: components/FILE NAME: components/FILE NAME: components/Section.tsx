export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "2.5rem",
      }}
    >
      <h2
        style={{
          marginBottom: "1rem",
          borderBottom: "1px solid #222",
          paddingBottom: "0.5rem",
        }}
      >
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}
