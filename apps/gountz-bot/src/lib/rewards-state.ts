export class RewardsState {
	private _idBorder: string;
	private _idCard: string;
	private _idTicket: string;
	borderSpecial: boolean;
	cardSpecial: boolean;
	ticket: boolean;

	constructor() {
		this.borderSpecial = false;
		this.cardSpecial = false;
		this.ticket = false;
	}

	toggleBorderSpecial() {
		this.borderSpecial = !this.borderSpecial;
	}

	toggleCardSpecial() {
		this.cardSpecial = !this.cardSpecial;
	}

	toggleTicket() {
		this.ticket = !this.ticket;
	}

	get isBorderActive() {
		return this.borderSpecial;
	}

	get isCardActive() {
		return this.cardSpecial;
	}

	get isTicketActive() {
		return this.ticket;
	}

	get idBorder() {
		return this._idBorder;
	}

	set idBorder(id: string) {
		this._idBorder = id;
	}

	get idCard() {
		return this._idCard;
	}

	set idCard(id: string) {
		this._idCard = id;
	}

	set idTicket(id: string) {
		this._idTicket = id;
	}

	get idTicket() {
		return this._idTicket;
	}
}
