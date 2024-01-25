class googleResultPage {


    clickResultByIndex(index){
      cy.xpath("(//h3)["+index+"]").click()
    }
  }
  
  export default new googleResultPage();