class Child extends Person {
	constructor(name, age) {
		super(name, age);
	}

	breathe(air) {}

	call(message = 'Hello? Can anyone hear me?') {
		this.breathe(5);
		console.log('You call out "' + message + '"');
	}

	wait() {
		this.breathe(1);
	}

	shake() {}

	slam() {}
}