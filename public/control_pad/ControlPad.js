class ControlPad {
	constructor(element) {
		this.target = $(element);
		this.bindings = new Map;
		this.commands = new Map;
	}

	bind(key, func) {
		if (!this.bindings.has(key)) {
			this.bindings.set(key, new Key(key));
		}

		this.bindings.get(key).command = func;
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

	get activeKeys() {
		return this.bindings.forEach((key, keyName) => {
			if (key.state) return keyName;
		});
	}

	get inactiveKeys() {
		return this.bindings.forEach((key, keyName) => {
			if (!key.state) return keyName;
		});
	}
}