var CryptoApp = angular.module('CryptoApp', []);

CryptoApp.controller('LettersCtrl', ['$scope', '$filter', function ($scope, $filter) {

	$scope.HideLetter = function(passedLetter) {			
		var letterFromList = $filter('filter')($scope.letters, {correctValue: passedLetter}, true);
		if (letterFromList.length) {
			return letterFromList[0].maskedValue;
		}
	}
	
	$scope.Win = function() {
		var success = true;
		
		angular.forEach($scope.letters, function(item) {			
			if(item.correctValue.toUpperCase() != item.maskedValue.toUpperCase())
			{
				if(item.correctValue == 'S'
					|| item.correctValue == 'I'
					|| item.correctValue == 'R'
					|| item.correctValue == 'A'
					|| item.correctValue == 'L'
					|| item.correctValue == 'F'
					|| item.correctValue == 'E'
					|| item.correctValue == 'D'
					|| item.correctValue == 'O'
					|| item.correctValue == 'G'
					|| item.correctValue == 'T'
					|| item.correctValue == 'H'
					|| item.correctValue == 'M')
				{
					success = false;
				}
			}
		});
		
		if(success)
		{
			return "You did it!  You guessed my dog's name!";
		}
		else
		{
			return "This puzzle is unsolved, keep trying!";
		}
	}

	$scope.letters = [
		{'correctValue': 'A',
		'maskedValue': 'E',
		'labelValue': 'E'},
		{'correctValue': 'B',
		'maskedValue': 'F',
		'labelValue': 'F'},
		{'correctValue': 'C',
		'maskedValue': 'G',
		'labelValue': 'G'},
		{'correctValue': 'D',
		'maskedValue': 'H',
		'labelValue': 'H'},
		{'correctValue': 'E',
		'maskedValue': 'I',
		'labelValue': 'I'},
		{'correctValue': 'F',
		'maskedValue': 'J',
		'labelValue': 'J'},
		{'correctValue': 'G',
		'maskedValue': 'K',
		'labelValue': 'K'},
		{'correctValue': 'H',
		'maskedValue': 'L',
		'labelValue': 'L'},
		{'correctValue': 'I',
		'maskedValue': 'M',
		'labelValue': 'M'},
		{'correctValue': 'J',
		'maskedValue': 'N',
		'labelValue': 'N'},
		{'correctValue': 'K',
		'maskedValue': 'O',
		'labelValue': 'O'},
		{'correctValue': 'L',
		'maskedValue': 'P',
		'labelValue': 'P'},
		{'correctValue': 'M',
		'maskedValue': 'Q',
		'labelValue': 'Q'},
		{'correctValue': 'N',
		'maskedValue': 'R',
		'labelValue': 'R'},
		{'correctValue': 'O',
		'maskedValue': 'S',
		'labelValue': 'S'},
		{'correctValue': 'P',
		'maskedValue': 'T',
		'labelValue': 'T'},
		{'correctValue': 'Q',
		'maskedValue': 'U',
		'labelValue': 'U'},
		{'correctValue': 'R',
		'maskedValue': 'V',
		'labelValue': 'V'},
		{'correctValue': 'S',
		'maskedValue': 'W',
		'labelValue': 'W'},
		{'correctValue': 'T',
		'maskedValue': 'X',
		'labelValue': 'X'},
		{'correctValue': 'U',
		'maskedValue': 'Y',
		'labelValue': 'Y'},
		{'correctValue': 'V',
		'maskedValue': 'Z',
		'labelValue': 'Z'},
		{'correctValue': 'W',
		'maskedValue': 'A',
		'labelValue': 'A'},
		{'correctValue': 'X',
		'maskedValue': 'B',
		'labelValue': 'B'},
		{'correctValue': 'Y',
		'maskedValue': 'C',
		'labelValue': 'C'},
		{'correctValue': 'Z',
		'maskedValue': 'D',
		'labelValue': 'D'}
  ];
}]);