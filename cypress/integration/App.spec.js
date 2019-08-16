describe("End to end test", () => {
  it("Should test app with no crash", () => {
    expect(true).to.equal(true);
  });
});

describe("Render application", () => {
  it("Should test an index page", () => {
    cy.visit("/");
  });

  it("Should load login page", () => {
    cy.visit("/login");
  });
});
