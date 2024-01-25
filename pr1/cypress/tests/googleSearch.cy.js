import googleSearchPage from "../pages/googleSearchPage"
import googleResultPage from "../pages/googleResultPage";
import wikiPage from "../pages/wikiPage";

describe('Google Search', () => {
  beforeEach(() => {
    cy.visitGooglePage();
  });

  it('should perform a search on Google using a coded argument', () => {
    googleSearchPage.search("Naruto")
    cy.url().should('include', 'search');
    googleResultPage.clickResultByIndex("1")
    wikiPage.getWikiTitle().should('contain', 'Naruto')
  });


  it('should perform a search on Google using the sqlite db result', () => {
    const trackId = 1; // Assuming you want information for TrackId 1
    const databaseQuery = `SELECT Name FROM tracks WHERE TrackId = ${trackId}`;

    // Use the result from the database within the test
    cy.task('queryDatabase', databaseQuery).then((result) => {
      // Log or use the result from the database
      cy.log(`Result from the database: ${result}`);

      // Perform a search using the result from the SQLite database
      googleSearchPage.performSearchWithDBResult(result);
      cy.url().should('include', 'search');
      googleResultPage.clickResultByIndex("2")
      wikiPage.getWikiTitle().should('contain', 'For Those About to Rock We Salute You')
    });
  });

});
