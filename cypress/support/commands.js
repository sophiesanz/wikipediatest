Cypress.Commands.add('searchEngine', (searchTerm) => {
    cy.visit('/')
    cy.get('input[name=search]').type(searchTerm)
    cy.get('input#searchButton').click()
})
