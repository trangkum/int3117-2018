context('Actions', ()) => {
    beforeEach(() => {
        cy.visit('https://hoclieu.sachmem.vn/folder/0')
    })

    it('go to login page', () => {
        cy.get('a[id="link-login"]').click()
        cy.url().should('eq', 'https://accounts.sachmem.vn/users/sign_in')
    })
}