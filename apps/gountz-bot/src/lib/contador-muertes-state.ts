export class ContadorMuertesState {
    private count: number;

	constructor() {
        this.count = 0;
	}

    increment() {        
        this.count = this.count + 1;    
    }

    getCount() {
        return this.count;
    }
}

