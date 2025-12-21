export interface Worlds2025Repository {
	getStickers(id: string): Promise<string[]>;
}
