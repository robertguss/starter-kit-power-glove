describe('Home page', function() {
  it('finds the content "Power Glove"', function() {
    cy.visit('http://starter-kit-power-glove.test/');

    cy.contains('Power Glove');
  });
});
