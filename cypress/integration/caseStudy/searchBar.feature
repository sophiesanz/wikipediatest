Feature: Searching content

    Scenario: Search a misspelling word to find content
        Given the visitor is on the wikipedia home page
        When the visitor searches for "furry rabbits"
        Then a "did you mean" suggestion is displayed
        And the visitor can see 20 results

    Scenario: Visit a page from a suggested content search results
        Given the visitor is on the search result page for "furry rabbits"
        When the visitor uses the "Did you mean" feature to correct his search
        And select the first entry
        Then the visitor is on the article page of the first hit