export default function Loading({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        textAlign: "center",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          border: "4px solid #333",
          borderTop: "4px solid #e50914",
          borderRadius: "50%",
          margin: "0 auto 1rem",
          animation: "spin 1s linear infinite",
        }}
      />

      <p>{message}</p>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
