class Entity {
	constructor(room, position = this.rollPosition()) {
		this.room = room;
		this.position = position;
	}

	rollPosition() {
		var max = { x: this.room.dimensions.x, y: this.room.dimensions.y },
			pos = {};

		while (!room.empty(pos)) {
			pos = {
				x: randint(-max.x, max.x),
				y: randint(-max.y, max.y)
			};
		}
	}
}