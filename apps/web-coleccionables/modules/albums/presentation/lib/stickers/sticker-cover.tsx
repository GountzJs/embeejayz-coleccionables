interface Props {
  width: string;
  children: React.ReactNode;
  variant?: "VERTICAL" | "HORIZONTAL";
  aspectRatio?: string;
}

export function StickerCover({
  width,
  children,
  variant = "VERTICAL",
  aspectRatio = "200 / 280",
}: Props) {
  const getPolygon = () => {
    if (variant === "VERTICAL") {
      return "polygon(14% 0, 100% 0, 100% 91.5%, 88% 100%, 0 100%, 0 10%)";
    }
    return "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 9% 100%, 0 87%)";
  };

  return (
    <div
      className="bg-gray-200/50 h-fit p-1"
      style={{
        clipPath: getPolygon(),
        width,
        aspectRatio,
      }}
    >
      {children}
    </div>
  );
}
