describe("App", function() {
    
  it("should return true in the phrase is palindrome, false for other", function() { 
      expect(Palindrome.isPhrasePalindrome("ioi eioi")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("emi uyse")).toBe(false);

      expect(Palindrome.isWordPalindrome("ioi")).toBe(true);
      expect(Palindrome.isWordPalindrome("emi")).toBe(false);
  });  
});
