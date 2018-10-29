describe('Login sachmem.vn', () => {
  it('visit website', () => {
    cy.visit('https://accounts.sachmem.vn/users/sign_in');
  });
  it('Login', () => {
    cy.contains('Đăng nhập').should('be.visible');
  });
   it('Enter email', () => {
    cy.get('#user_email')
      .type('ngdathd@gmail.com');
  });
   it('Enter password', () => {
    cy.get('#user_password')
      .type('1');
  });
   it('Click login button', () => {
    cy.get('input.btn-block').click();
  });
  it('Visible error', () => {
	  //cy.contains('Email hoặc mật khẩu không chính xác. Vui lòng nhập đúng địa chỉ email và mật khẩu của bạn.').should('be.visible');
	  cy.contains('.margin-right-10px').should('be.visible');
  });
});
