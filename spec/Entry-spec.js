import { Entry } from '../js/Entry.js';
describe('Entry', function(){
  it('should test number of words in one body', function(){
    var newEntry = new Entry("test1","this is my test");
    expect(newEntry.GetWords()).toEqual(4);

  });
});
  describe('Entry', function(){
    it('should test number of vowels in one body', function(){
      var newEntry = new Entry("test1","this is my test");
      expect(newEntry.GetVowels()).toEqual(3);

    });
});
