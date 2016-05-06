describe("BMICalculator", function() {
  var bmi_calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_english = Person({weight: 150, height: 64});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person_english);
    expect(person_english.bmiValue).toEqual(25.74);
  });
});
