class Entity {
	constructor(container) {
		this.container = container;
	}

	getRoom() {
		if (!(this.container instanceof Room)) {
			return this.container.getRoom();
		} else {
			return this.container;
		}
	}
}