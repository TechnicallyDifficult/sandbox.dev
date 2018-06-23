class Room extends Grid {
	spawnBox(posX, posY) {
		super.assignEntity(new Box(this), posX, posY);
	}

	spawnChild(posX, posY) {
		super.assignEntity(new Child(this), posX, posY);
	}
}