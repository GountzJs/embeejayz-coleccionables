import { useSlider } from "./provider";

interface Props {
	length: number;
}

export function Dots({ length }: Props) {
	const { changeSelected, selected } = useSlider();

	return (
		<ul className="absolute left-1/2 -translate-x-1/2 flex gap-4 bottom-4">
			{Array.from({ length }).map((_, index) => (
				<li key={`dot-${index + 1}`}>
					<button
						type="button"
						className={`${index === selected ? "bg-white" : "bg-gray-600"} cursor-pointer duration-150 hover:opacity-80 rounded-full h-6 w-6`}
						onClick={() => changeSelected(index)}
					></button>
				</li>
			))}
		</ul>
	);
}
