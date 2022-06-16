describe('Sanity checks for Welcome page', () => {
  before(() => {
    cy.window().then($win => {
      $win.sessionStorage.clear();
    });
    cy.clearCookies();

    cy.visit('/');
  });

  it('Should display the Good Luck welcome message', () => {
    cy.contains('Good luck!').should('be.visible');
  });

  it('Should display the enabled "Next" button');

  it('Should display the Report abuse link');

  it('Should display the Terms of use link');
});
