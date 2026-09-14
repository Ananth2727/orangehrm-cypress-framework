class LoginPage {

    selectors = {
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'button[type="submit"]',
        loginError: '.oxd-alert-content-text'
    };

  visit() {
    cy.visit('/');
}

    enterUsername(username) {
        cy.get(this.selectors.username).type(username);
    }

    enterPassword(password) {
        cy.get(this.selectors.password).type(password);
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    verifyLoginError(message) {
        cy.get(this.selectors.loginError)
            .should('be.visible')
            .and('contain', message);
    }

    loginAndVerify(username, password) {
    this.login(username, password);

    cy.url().should('include', '/dashboard');
}
}

export default LoginPage;