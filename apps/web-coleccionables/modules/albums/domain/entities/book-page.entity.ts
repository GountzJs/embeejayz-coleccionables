export interface PageContent {
	front: React.ReactNode;
	back: React.ReactNode;
}

export type BookPage = {
	id: number;
	content: PageContent;
};
