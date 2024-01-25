class googleSearchPage {
    visit() {
      cy.visit('https://www.google.com/');
    }
  
    search(query) {
      cy.xpath("//textarea[@name='q']").type(query+ '{enter}');
    }

    performSearchWithDBResult(dbResult) {
      // Perform a search using the result from the SQLite database
      this.search(dbResult);
      cy.url().should('include', 'search');
    }

  }
  
  export default new googleSearchPage();