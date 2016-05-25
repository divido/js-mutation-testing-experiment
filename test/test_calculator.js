
require(['local/calculator'], function(cal) {

	describe('Calculator', function(){
		it('substractPositive', function(){
			expect(cal.substractPositive(1, -1)).toEqual(2);
		});

		it('add', function(){
			expect(cal.add(1, 1)).toEqual(2);
		});
	});
});
