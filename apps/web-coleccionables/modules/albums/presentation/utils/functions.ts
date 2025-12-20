export function capitalizeFirst(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function insertSpace(str: string): string {
	if (str.length <= 6) return str;
	return `${str.slice(0, 6)} ${str.slice(6)}`;
}
