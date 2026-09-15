class DashboardPage {
    selectors = {
        pageTitle: '.oxd-topbar-header-breadcrumb-module',
        userDropdown: '.oxd-userdropdown-name',
        sideMenuItems: '.oxd-main-menu-item'
    };

    visit() {
        cy.visit('/web/index.php/dashboard/index');
    }

    verifyPageLoaded() {
        cy.get(this.selectors.pageTitle)
            .should('be.visible')
            .and('contain', 'Dashboard');
    }

   verifyLoggedInUser() {
    cy.get(this.selectors.userDropdown)
        .should('be.visible')
        .invoke('text')
        .should('not.be.empty');
}

    navigateTo(menuItem) {
        cy.get(this.selectors.sideMenuItems)
            .contains(menuItem)
            .click();
    }
}

export default DashboardPage;