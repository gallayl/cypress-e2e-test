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
    it('Should display the Required Field message for a missing select box');
  });

  describe('The Happy path');
});
