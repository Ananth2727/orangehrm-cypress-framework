import LoginPage from '../../pages/LoginPage';
import users from '../../fixtures/users.json';

const loginPage = new LoginPage();

describe('OrangeHRM - Login', () => {

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login successfully with valid credentials', () => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

       cy.visit('/web/index.php/dashboard/index');

        cy.url().should('include', '/dashboard');
    });

    it('should display an error for invalid credentials', () => {
        loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        loginPage.verifyLoginError('Invalid credentials');
    });

});