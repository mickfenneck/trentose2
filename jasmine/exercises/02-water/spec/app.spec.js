describe("App", function() {
    
  it("should return the status", function() { 
      expect(Water.getStatus(20)).toBe("liquid");
	  expect(Water.getStatus(-20)).toBe("ice");
	  expect(Water.getStatus(-6723)).toBe(null);
  }); 
});