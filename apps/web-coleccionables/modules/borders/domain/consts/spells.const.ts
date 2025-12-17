export const spells = {
	barrier: "barrier",
	cleanse: "cleanse",
	exhaust: "exhaust",
	flash: "flash",
	ghost: "ghost",
	heal: "heal",
	smite: "smite",
	teleport: "teleport",
	ignite: "ignite",
} as const;

export type TSpell = keyof typeof spells;
