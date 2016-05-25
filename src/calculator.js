define([],
	function () {
		return {
			substractPositive: function(num1, num2){
				if (num1 > 0){
					return num1 - num2;
				}
				else {
					return 0
				}
			},

			add: function(num1, num2){
				if (num1 == num2){
					return num1 + num2;
				}
				else if (num1 > num2){
					return num1 + num2;
				}
				else {
					return num1 + num2;
				}
			}
		};
	});
