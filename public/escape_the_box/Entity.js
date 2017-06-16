class Entity {
	constructor(location, position = this.rollPosition()) {
		this.location = location;
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

	get room() {
		var location = this.location;

		while (!(location instanceof Room)) {
			location = location.location;
		}

		return location;
	}
}