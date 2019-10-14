$(document).ready(function () {
	function playGame() {
		var wins = 0;
		var losses = 0;
		var crystalRanNum;
		var crystalNumArray;
		var playerTotal;

		function play() {
			$('#playBtn').on('click', function () {
				$('#playBtn').fadeOut(500, displayGame());
			});
		};

		function displayGame() {
			$('#gameContainer').delay(500).fadeIn(500);
		};

		function showRules() {
			$('.fa-question').on('click', function () {
				$('#instructions').slideDown(500);
			})
		}

		function hideRules() {
			$('#instructions').on('click', function () {
				$('#instructions').slideUp(500);
			})
		}

		function quitGame() {
			$('.fa-times').on('click', function () {
				$('#gameContainer').fadeOut(500, resetGame());
				$('#playBtn').delay(500).fadeIn(500);
				$('#instructions').delay(500).hide(0);
			})
		}

		function resetGame() {
			wins = 0;
			losses = 0;
			playerTotal = 0;
			$('#wins').text('WINS - ' + wins);
			$('#losses').text(losses + ' - LOSSES');
			$('#playerTotal').text(playerTotal);

		}

		function resetValues() {
			crystalRanNum = (Math.floor(Math.random() * 102) + 19);
			crystalNumArray = [];
			playerTotal = 0;
			for (var i = 0; i < 4; i++) {
				crystalNumArray[i] = (Math.floor(Math.random() * 12) + 1);
			};
		};

		function updateScoreValues() {
			$('#wins').text('WINS - ' + wins);
			$('#losses').text(losses + ' - LOSSES');
			$('#crystalRanNum').text(crystalRanNum);
			$('#playerTotal').text(playerTotal);
		};

		function game() {
			$('#c0').on('click', function () {
				playerTotal += crystalNumArray[0];
				$('#playerTotal').text(playerTotal);
				winLossCondition(playerTotal, crystalRanNum);
			});
			$('#c1').on('click', function () {
				playerTotal += crystalNumArray[1];
				$('#playerTotal').text(playerTotal);
				winLossCondition(playerTotal, crystalRanNum);
			});
			$('#c2').on('click', function () {
				playerTotal += crystalNumArray[2];
				$('#playerTotal').text(playerTotal);
				winLossCondition(playerTotal, crystalRanNum);
			});
			$('#c3').on('click', function () {
				playerTotal += crystalNumArray[3];
				$('#playerTotal').text(playerTotal);
				winLossCondition(playerTotal, crystalRanNum);
			});
		};

		function winLossCondition(num1, num2) {
			if (num1 === num2) {
				wins++;
				resetValues();
				updateScoreValues();
			}
			else if (num1 > num2) {
				losses++;
				resetValues();
				updateScoreValues();
			};
		};

		play();
		resetValues();
		updateScoreValues();
		game();
		showRules();
		hideRules();
		quitGame();
	};

	playGame();
});