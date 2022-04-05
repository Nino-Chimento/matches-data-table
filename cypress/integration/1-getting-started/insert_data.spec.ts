describe("Insert data", () => {
  it("successfully insert data", () => {
    cy.visit("/");
    cy.get("input[name=team-away]").type("mil");
    cy.get("input[name=team-home]").type("int");
    cy.get("input[name=date]").type("2022-05-05");
    cy.get("input[name=time]").type("11:11");
    cy.get("select").select("away");
    cy.get("[id=send-form-matches]").click();
  });
});
