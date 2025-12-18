import { useEffect } from "react";

interface Props {
	ref: React.RefObject<HTMLElement | null>;
	handler: (event: MouseEvent) => void;
}
export function useClickOutsideHook({ ref, handler }: Props) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				event.target instanceof Node &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				handler(event);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, handler]);
}
