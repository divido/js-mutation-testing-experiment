describe('Calculator', function(){
  it('substractPositive', function(){
	  expect(substractPositive(1, -1)).toEqual(2);
  });

  it('add', function(){
	  expect(add(1, 1)).toEqual(2);
  });
})
