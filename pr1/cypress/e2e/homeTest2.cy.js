
import homePage from "../pages/homePage"

describe("testing", () => {


  beforeEach(() => {
    //cy.intercept('/service-worker.js', {
     // body: undefined
    // })
    cy.visit("http://www.saucedemo.com")
    cy.fixture('example').as("data")
  })


  context("Hero section", () => {
    it.only("allows users to subscribe to the email list", () => {

      cy.get('@data').then((data) => {
        console.log(data.email)
        homePage.suscribeForUpdates(data.email)
      })


    })










    it("does NOT allow an invalid email address", () => {
      cy.getByData("email-input").type("tom")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })


    it("does NOT allow already subscribed email addresses", () => {
      cy.getByData("email-input").type("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("exist")
        .contains("already exists. Please use a different email address.")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })
})




























/*
  it.only("allows users to subscribe to the email list", () => {
    //homePage.elements.emailInput().type("a@g.com")
    //homePage.clickOnSubmitBtn()
    homePage.suscribeForUpdates("test@f.com")
    //homePage.elements.successMessage().should("exist").contains("tom@aol.com")
  })

  */

