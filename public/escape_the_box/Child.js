class Child extends Person {
	constructor(name = 'Bob', age = 8) {
		super(name, age, /* location of box */);
	}

	breathe(air = 1) {
		//
	}

	call(message = 'Hello? Can anyone hear me?') {
		this.breathe(5);
		console.log('You call out "' + message + '"');
	}

	wait() {
		this.breathe();
	}

	shake() {}

	slam() {}
}