it('should calculate lower-bracket taxes', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
    expect(calculateTaxes(27500)).toEqual(4125);
  });
  
  it('should calculate higher-bracket taxes', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });