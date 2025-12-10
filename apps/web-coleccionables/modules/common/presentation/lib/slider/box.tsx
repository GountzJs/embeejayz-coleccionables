import { useEffect, useRef } from "react";
import { useSlider } from "./provider";

interface Props {
	children: React.ReactNode;
}

export function Box({ children }: Props) {
	const { selected } = useSlider();
	const ulRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (ulRef.current) {
			const itemWidth = ulRef.current.offsetWidth;
			ulRef.current.scrollTo({
				left: selected * itemWidth,
				behavior: "smooth",
			});
		}
	}, [selected]);

	return (
		<ul
			ref={ulRef}
			className="flex h-full w-full overflow-x-hidden snap-x snap-mandatory"
			style={{
				scrollSnapType: "x mandatory",
				scrollBehavior: "smooth",
			}}
		>
			{children}
		</ul>
	);
}
