<?php

class GameShow {
	private $doors = 100;

	private $win;

	private $choice;

	public function __construct() {
		$this->win = mt_rand(1, $doors);
	}

	public function intro() {
		echo 'You are at a game show.' . PHP_EOL;

		if ($this->doors === 0) {
			echo '...Or at least you WERE going to be, but you got nervous and chickened out at the last minute.' . PHP_EOL;
			exit(0);
		}

		if ($this->doors === 1) {
			echo 'There is just one door.' . PHP_EOL;
			echo 'It\'s the exit door,' . PHP_EOL;
			echo 'which you are promptly shoved through.' . PHP_EOL;
			echo 'Next time, maybe don\'t show up in your underwear.' . PHP_EOL;
			exit(0);
		}

		echo "There are $this->doors identical doors." . PHP_EOL;

		if ($this->doors < 0) {
			echo 'Wait, none?' . PHP_EOL;
			echo 'Uh... I guess you automatically lost.' . PHP_EOL;
			exit(0);
		}

		echo 'Behind one of them is a win.' . PHP_EOL;

		if ($this->doors === 2) {
			echo 'Behind the other one is a loss.' . PHP_EOL;
			echo '50-50 odds.' . PHP_EOL;
			echo 'This game is pure luck, so rather than give you the illusion of meaningful choice, I\'m just going to make you lose automatically.' . PHP_EOL;
			exit(0);
		}

		echo "Behind the other {$this->doors - 1} are losses." . PHP_EOL;
		echo 'The game show host tells you to pick one of them.' . PHP_EOL;
		echo 'Which one do you pick?' . PHP_EOL;
	}
}