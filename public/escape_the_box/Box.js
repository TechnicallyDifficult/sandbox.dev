class Box extends Entity {
	constructor(container) {
		super(container);

		this.air = 100;
		this.durability = 100;
		this.contents = null;
	}

	fill(entity) {
		this.contents = entity;
		this.contents.container = this;
	}
}