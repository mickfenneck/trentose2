describe("TryAngle", function() {
    
  it("checks if it's a triangle", function() {
    expect(TryAngle.isTriangle(23,12,56)).toBe(true);
  });

  it("checks the triangle's type", function() { 
    expect(TryAngle.getTypeBySidesLength(3,3,3)).toBe(TryAngle.SIDE_EQUILATERAL);
    expect(TryAngle.getTypeBySidesLength(1,2,2)).toBe(Triangle.SIDE_ISOSCELES);
    expect(TryAngle.getTypeBySidesLength(5,7,11)).toBe(Triangle.SIDE_SCALENE);
  });

  it("checks the triangle's angle", function() { 
    expect(Triangle.getTypeByAngles(4,1,4)).toBe(Triangle.ANGLE_ACUTE);
    expect(Triangle.getTypeByAngles(7,3,3)).toBe(Triangle.ANGLE_OBTUSE);
    expect(Triangle.getTypeByAngles(3,4,5)).toBe(Triangle.ANGLE_RIGHT);
  });  
});