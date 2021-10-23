describe('suit1', () => {
    beforeEach(() => {
    cy.readFile('./introspection.schema.graphql').then(schema => {
        //cy.mockNetwork({ schema: schema, mocks: 'localhost:4200'});
        cy.mockNetwork({schema});
    });
});
    it("it should be increased by 1", () => {
        //cy.get('ul > :nth-child(1)').invoke('attr', 'value').as('x');
        let votesBefore = 0;
        cy.visit("localhost:4200");
        cy.get('ul > :nth-child(1)').invoke('attr', 'value').then(($vb)=>{
            votesBefore = $vb;
        })
        cy.get(':nth-child(1) > app-upvoter > button').click();
        cy.visit("localhost:4200");
        cy.get('ul > :nth-child(1)').invoke('attr', 'value').then(($va) => {
            const votesAfter = String($va);
            const votesAfterNr = Number(votesAfter);
            const VotesBeforeNr = Number(votesBefore);
            expect(votesAfterNr).to.equal(VotesBeforeNr+1);
        });
    })
});
