import { createContext, useContext, useState } from "react";

type SliderContextType = {
	selected: number;
	changeSelected: (item: number) => void;
};

const SliderContext = createContext<SliderContextType>({
	selected: 0,
	changeSelected: () => {},
});

interface Props {
	children: React.ReactNode;
}

export const useSlider = () => useContext(SliderContext);

export function Provider({ children }: Props) {
	const [selected, setSelected] = useState(0);

	const changeSelected = (item: number) => setSelected(item);

	return (
		<div className="flex-1 self-stretch w-full">
			<SliderContext.Provider
				value={{
					selected,
					changeSelected,
				}}
			>
				<div className="relative h-full w-full">{children}</div>
			</SliderContext.Provider>
		</div>
	);
}
