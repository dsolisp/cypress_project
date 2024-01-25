class wikiPage {


    getWikiTitle(index){
      return cy.xpath('//h1')
    }
  }
  
  export default new wikiPage();