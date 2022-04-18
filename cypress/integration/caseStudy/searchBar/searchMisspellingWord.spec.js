
/* Feature: Searching content

    Scenario: Search a misspelling word to find content */

import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps'
import searchWikipedia from '../../../fixtures/searchWikipedia.fixture.json'

Given('the visitor is on the wikipedia home page', () => {
    cy.visit('/')
})
When('the visitor searches for "furry rabbits"', () => {
    cy.get('input[name=search]').type(searchWikipedia.en.term)
    cy.get('input#searchButton').click()
})
Then('a "did you mean" suggestion is displayed', () => {
    cy.url().should('include', '?search=')
    expect(cy.get('a#mw-search-DYM-suggestion')).to.exist
})
And('the visitor can see 20 results', () => {
    cy.get('.mw-search-results').find('li').should('have.length', 20)
})
