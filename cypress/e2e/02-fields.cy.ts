describe('Simple fields', () => {
  before(() => {
    cy.window().then($win => {
      $win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit('/').contains('Next').click();
    cy.contains('Some simple fields');
  });

  describe('Validation', () => {
    // TODO: The validation should be tested for each field

    describe('Pets', () => {
      it('Should display an error message if no pet is selected');
      it('Should...');
    });

    describe('Breakfast', () => {
      it('Should display an error message if option is selected');
      it('Should allow one option');
      it('Should allow multiple options');
    });

    describe('Birth date', () => {
      it('Should display an error message if birthdate is provided');
      it('Should display an error message for wrong format');
      it('Should accept a valid date');
    });
  });

  describe('The Happy path', () => {
    it('Should proceed to the next step when all required fields are filled');
    // TODO: The section should be submitted with valid values
  });
});
