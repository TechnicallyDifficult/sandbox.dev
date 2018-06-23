class Grid {
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.grid = [].fill([].fill(null, 0, sizeX), 0, sizeY);
	}

	entityAt(posX, posY) {
		return this.grid[posY][posX];
	}

	spawn(entity, posX, posY) {
		if (this.grid[posY][posX] === null) {
			this.grid[posY][posX] = entity;
		} else if (this.grid[posY][posX].contents === null) {
			this.grid[posY][posX].fill(entity);
		} else {
			console.log('An entity tried to spawn at (' + posX + ', ' + posY + '), but was blocked by another.');
		}
	}

	distanceBetween(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}

	getRow(rowIndex) {
		return this.grid[rowIndex];
	}

	getColumn(columnIndex) {
		return this.grid.map((elem) => elem[columnIndex]);
	}
}