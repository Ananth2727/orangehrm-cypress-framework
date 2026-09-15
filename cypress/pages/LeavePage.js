class LeavePage {
    selectors = {
        pageTitle: '.oxd-topbar-header-breadcrumb-module',
        leaveTable: '.oxd-table'
    };

    verifyPageLoaded() {
        cy.get(this.selectors.pageTitle)
            .should('be.visible')
            .and('contain', 'Leave');
    }

    verifyLeaveTableDisplayed() {
        cy.get(this.selectors.leaveTable)
            .should('exist');
    }
}

export default LeavePage;