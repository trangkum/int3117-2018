context('Actions', ()) => {
    beforeEach(() => {
        cy.visit('https://hoclieu.sachmem.vn/folder/0')
    })

    describe('Test go to login page', () => {
        it('go to login page', () => {
            cy.get('a[id="link-login"]').click()
            cy.url().should('eq', 'https://accounts.sachmem.vn/users/sign_in')
        })
    })

}