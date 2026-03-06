import Image from "next/image";

export default function RoundedImage({
  src,
  alt,
  radius = "12px",
  width = 300,
  height = 300,
}: {
  src: string;
  alt: string;
  radius?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: radius,
        width,
        height,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
