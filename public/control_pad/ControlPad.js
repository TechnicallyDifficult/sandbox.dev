class ControlPad {
	constructor(element) {
		this.target = $(element);
		this.bindings = new Map;
		this.commands = new Map;
	}

	bind(key, command) {
		this.bindings
			.set(key, new Key(key))
			.get(key)
				.addCommand(command);
	}

	newCommand(command, name) {
		if (typeof command !== 'function') return;
		this.commands.set(name, command);
	}

	get target() {
		return this._target;
	}

	set target(target) {
		this._target = target;
	}

	// I'm not sure I like how I did this...
	get activeKeys() {
		var active = [];

		this.bindings.forEach(function (key, keyName) {
			if (key.state) this.push(keyName);
		}, active);

		return active;
	}

	// or this...
	get inactiveKeys() {
		var inactive = [];

		this.bindings.forEach(function (key, keyName) {
			if (!key.state) this.push(keyName);
		}, inactive);

		return inactive;
	}
}