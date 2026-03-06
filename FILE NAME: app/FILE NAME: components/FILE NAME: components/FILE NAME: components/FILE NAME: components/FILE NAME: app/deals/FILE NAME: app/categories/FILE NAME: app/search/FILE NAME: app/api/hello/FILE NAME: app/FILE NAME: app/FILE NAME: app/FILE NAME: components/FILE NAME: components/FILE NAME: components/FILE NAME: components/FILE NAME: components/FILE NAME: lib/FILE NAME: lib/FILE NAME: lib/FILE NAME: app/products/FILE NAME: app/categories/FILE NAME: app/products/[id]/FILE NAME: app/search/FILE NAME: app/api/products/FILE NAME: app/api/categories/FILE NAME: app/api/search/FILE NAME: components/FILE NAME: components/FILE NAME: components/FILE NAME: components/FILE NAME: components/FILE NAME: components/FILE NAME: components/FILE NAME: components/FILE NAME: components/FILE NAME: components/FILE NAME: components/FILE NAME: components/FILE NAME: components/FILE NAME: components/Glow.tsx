export default function Glow({
  children,
  intensity = 0.35,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          background: `radial-gradient(circle, rgba(229,9,20,${intensity}) 0%, rgba(0,0,0,0) 70%)`,
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
}
