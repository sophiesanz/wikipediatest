
/* Feature: Searching content

    Scenario: Visit a page from a suggested content search results */

import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import searchWikipedia from '../../../fixtures/searchWikipedia.fixture.json'


Given('the visitor is on the search result page for "furry rabbits"', () => {
    cy.searchEngine(searchWikipedia.en.term)
})
When('the visitor uses the "Did you mean" feature to correct his search', () => {
    cy.get('a[title="Special:Search"]').click()
})
And('select the first entry', () => {
    cy.get('.mw-search-results > li:first > div > a')
})
Then('the visitor is on the article page of the first hit', () => {
    cy.get('.mw-search-results > li:first > div > a').then(($firstSearchResult) => {
        const firstSearchResult = $firstSearchResult.text()
        cy.contains(firstSearchResult).click()
        cy.get('#firstHeading').should('have.text', firstSearchResult)
    })
})
