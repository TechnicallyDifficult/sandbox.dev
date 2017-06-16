class Key {
	constructor(name) {
		this.name = name;
		this.state = false;
	}

	press() {
		this.state = true;
	}

	release() {
		this.state = false;
	}
}