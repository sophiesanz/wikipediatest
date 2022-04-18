# Wikipedia Automation Test

This project contains the development of a QA case study implemented for testing a feature of the website https://en.wikipedia.org/ . Its scope is limited to the functional testing of search bar and search results. 

## 1. Installation

We will use a simple cypress application. To check any cypress dependencies please refer to https://docs.cypress.io/guides/getting-started/installing-cypress.

1. Git clone
    ```
    git clone https://github.com/sophiesanz/wikipediatest
    ```
2. To install, you can use npm or yarn
    ```
    npm install 
    or 
    yarn
    ```

## 2. Usage

- To run the cypress test please use the command line above. You will get a pop up with the cypress test runner.
  ```
  npm run cypress:open
  ```
  The cypress test runner will show the integration tests createad. (caseStudy / searchBar.feature). You will be able to run the integration
  test with the button "Run 1 integration spec".
- Optionally, you can select in the upper right corner dropdown Firefox or Chrome. 
- Once Cypress finish the tests it will show a report with the specs and a checkmark that shows that the test passed. You can also click on each spec to get the complete information for each step.
- Hovering the mouse for each step let you travel time to different steps.

### 3. Important Files

- cypress/fixtures
    - searchWikipedia.fixture.json: searching term for our tests
- cypress/integration/caseStudy/searchBar: automation scripts to validate the scenarios:
    - searchMispellingWord.spec.js
    - visitSuggestedContent.spec.js
- cypress/integration/caseStudy: feature file with the provided scenarios written in Gherking language
    - otherScenarios.txt: suggested additional scenario titles to validate the searching feature (**TEST part 2**)
    - searchBar.feature: 2 provided scenarios to automate. (**TEST part 1**)
- support/commands: custom command to search a term
    commands.js

### 4. Assumptions

- Searching term is provided in english language
- Base url is always https://en.wikipedia.org
- Automation testing only cover desktop breakpoints:  "viewportHeight": 768,
"viewportWidth": 1366,
- Custom command is used to isolate the searching of a term


### 5. Bonus

Strategies to adapt testing/automation in order to cover:
- Mobile testing
  - Integration with SauceLabs or Browserstack to test with mobile devices. 
  - Mobile version will need a new selectors or different approach.
  - Since the % of the visitors on mobile is high, I do suggest to include a visual regression test.
- API testing
  - Different lenguages using API request using headers.
    ```
    content-language: en
    ```
  - Using different params to perform the search.
    ```
    /w/api.php?action=opensearch&format=json&formatversion=2&search=fur&namespace=0&limit=10
    ```
  - Pagination, number of results.
  - Validate errors
    - Not found
    - Error Messages

### 6. TODO

- Desktop version is only covered. I would like to include the mobile version.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)