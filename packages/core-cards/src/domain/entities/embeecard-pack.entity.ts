export type UserEmbeecardPack = {
	id: string;
	username: string;
	displayName: string;
	profileImageUrl: string;
};

export type EmbeecardPack = {
	id: string;
	username: string;
	quantity: number;
	user: UserEmbeecardPack;
};
