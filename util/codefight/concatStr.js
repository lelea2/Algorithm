function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
// describe('example tests', function() {
//   it('should return correct text', function() {
//     Test.assertEquals(likes([]), 'no one likes this');
//     Test.assertEquals(likes(['Peter']), 'Peter likes this');
//     Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });
