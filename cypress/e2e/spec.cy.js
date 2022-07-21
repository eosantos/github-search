/// <reference types="cypress" />
describe("My First Test", () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit("http://localhost:3000/");

    cy.get(".flex > .w-full").click();

    cy.contains("Digite um login");

    cy.get(".w-96 > .w-full").type("Eduardo");

    cy.get(".flex > .w-full").click();
  });

  it('clicking "type" navigates to a new url', () => {
    cy.visit("http://localhost:3000/user/eduardo");

    cy.get(".justify-start").click();
  });

  it('clicking "type" navigates to a new url', () => {
    cy.visit("https://github.com/vuelibs");
  });
});
