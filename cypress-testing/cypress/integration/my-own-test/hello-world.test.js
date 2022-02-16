/// <reference types="cypress" />

describe("Basic Test", () => {
  it("Page title", () => {
    cy.visit("https://codedamn.com/");
    cy.contains("Learn Programming").should("exist");
    cy.get("div#root").should("exist");
  });
});
