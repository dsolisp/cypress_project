describe('template spec', () => {
  
  it('first test', () => {
    cy.visit('http://localhost:3000')
  })

  it('second test', () => {
    cy.visit('https://example.cypress.io')
  })

  it('third test', () => {
    cy.visit('http://localhost:3000')
  })

  it('xpath test', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//h1').contains("Kitchen Sink")
    cy.xpath('//h1').should('have.length', 3);
  });
})