// biome-ignore assist/source/organizeImports: <Autosave import>
import { usePacksContext } from "@/app/contexts/packs/packs.context";
import type { EmbeecardEntity } from "@embeejayz/core-cards";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { ViewEmbeecard } from "./view-embeecard";

interface Props {
	cards: EmbeecardEntity[];
}

const List = styled.ul`
    position: relative;
    width: 300px;
    height: 200px;
    list-style: none;
    padding: 0;
    margin: 5px;
`;

const ListItem = styled.li<{ $index: number; $total: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: ${(props) => props.$total - props.$index};
    transition: all 0.3s ease;
	padding: 0;
    margin: 0;
`;

interface CardWithId extends EmbeecardEntity {
	id: string;
	isOpen: boolean;
}

export function ListEmbeecards({ cards }: Props) {
	const { removePackSelected } = usePacksContext();
	const [items, setItems] = useState<CardWithId[]>(() =>
		cards.map((card) => ({
			...card,
			id: v4(),
			isOpen: false,
		})),
	);
	const allOpen = items.every((item) => item.isOpen);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (allOpen) {
			timer = setTimeout(() => {
				removePackSelected();
			}, 1400);
		}

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [allOpen, removePackSelected]);

	const handleClick = (clickedIndex: number) => {
		setItems((prevItems) => {
			const newItems = [...prevItems];
			const [clicked] = newItems.splice(clickedIndex, 1);
			newItems.push(clicked);
			return newItems;
		});
	};

	const changeToOpen = (id: string) => {
		setItems((prev) =>
			prev.map((item) => (item.id === id ? { ...item, isOpen: true } : item)),
		);
	};

	return (
		<List>
			{items.map((item, index) => (
				<ListItem key={item.id} $index={index} $total={items.length}>
					<ViewEmbeecard
						isDisabled={allOpen}
						onFlip={() => handleClick(index)}
						changeToOpen={() => changeToOpen(item.id)}
						{...item}
					/>
				</ListItem>
			))}
		</List>
	);
}
