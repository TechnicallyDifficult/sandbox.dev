class Child extends Entity {
	breathe(air) {
		if (this.container.air === undefined) {
			return;
		} else if (this.container.air >= air) {
			this.container.loseAir(air);
		} else if (this.container.air > 0) {
			this.struggle();
		} else {
			this.suffocate();
		}
	}

	call() {}

	wait() {
		this.breathe(1);
	}

	shake() {}

	slam() {}
}