interface Props {
  children: React.ReactNode;
  currentPage: number;
  page: number;
}

export function Paper({ children, currentPage, page }: Props) {
  const calculateZIndex = () => {
    if (currentPage === page) return 100;
    if (currentPage > page) return 1;
    return 100 - page;
  };

  const shouldBeVisible = currentPage >= page || currentPage === page - 1;

  return (
    <div
      className="absolute left-1/2 top-0 h-full w-1/2 transition-all duration-700 ease-in-out cursor-pointer"
      style={{
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        transform: currentPage > page ? "rotateY(-180deg)" : "rotateY(0deg)",
        zIndex: calculateZIndex(),
        visibility: shouldBeVisible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
}
