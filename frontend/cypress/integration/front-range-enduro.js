describe("Page Loading", ()=>{
    it("loads loads the page", () => {
        cy.visit("http://localhost:3001")
    })
    it("it does something", () => {
        cy.get("#bob").should("have.length.gte", 1)
    })
    // it("adds a dog"), () => {
    //     cy.get("input[name=name").type("Test Dog")
    //     cy.get("input[type=submit").click()
    // }
})

// test selectors in cypress data-