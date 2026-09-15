class AdminPage {
    selectors = {
        pageTitle: '.oxd-topbar-header-breadcrumb-module',
        usernameInput: '.oxd-form-row input',
        searchButton: 'button[type="submit"]',
        resetButton: 'button[type="reset"]',
        table: '.oxd-table-body'
    };

    verifyPageLoaded() {
        cy.get(this.selectors.pageTitle)
            .should('be.visible')
            .and('contain', 'Admin');
    }

    searchByUsername(username) {
        cy.get(this.selectors.usernameInput)
            .first()
            .should('be.visible')
            .type(username);

        cy.get(this.selectors.searchButton)
            .should('be.enabled')
            .click();
    }

    verifyResultsDisplayed() {
        cy.get(this.selectors.table)
            .should('be.visible');
    }

    resetSearch() {
        cy.get(this.selectors.resetButton)
            .should('be.visible')
            .click();
    }
}

export default AdminPage;