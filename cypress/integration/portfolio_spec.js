describe('Portfolio test', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Checks GET request', function () {
        cy.request('/data')
    });

    it('Checks form validation', function () {
        cy.visit('http://localhost:3000/contact');
        cy.get('#formBasicEmail')
            .type('test@test.com')
            .get('#formBasicSubject')
            .type('Subject')
            .get('#formBasicMessage')
            .type('Test message')
            .get('#submit-btn')
            .click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`You have submitted the following data:\nEmail: test@test.com \nSubject: Subject \nMessage: Test message`)
        });
    });

    it('Checks About page', function () {
        cy.contains('About').click();
        cy.contains('Learn');
    })
});
