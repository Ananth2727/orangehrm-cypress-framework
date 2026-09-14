class PimPage {
    selectors = {
        pageTitle: '.oxd-topbar-header-breadcrumb-module',
        addButton: '.orangehrm-header-container button',
        formLoader: '.oxd-form-loader',
        firstName: 'input[name="firstName"]',
        middleName: 'input[name="middleName"]',
        lastName: 'input[name="lastName"]',
        saveButton: 'button[type="submit"]',
        successMessage: '.oxd-toast-content',
        employeeList: '.oxd-table-body'
    };

    verifyPageLoaded() {
        cy.get(this.selectors.pageTitle)
            .should('be.visible')
            .and('contain', 'PIM');
    }

    clickAddEmployee() {
        cy.get(this.selectors.addButton)
            .should('be.visible')
            .click();
    }

    waitForFormToLoad() {
        cy.get(this.selectors.formLoader)
            .should('not.exist');
    }

    enterEmployeeDetails(firstName, middleName, lastName) {
        this.waitForFormToLoad();

        cy.get(this.selectors.firstName)
            .should('be.visible')
            .and('be.enabled')
            .type(firstName);

        cy.get(this.selectors.middleName)
            .should('be.visible')
            .and('be.enabled')
            .type(middleName);

        cy.get(this.selectors.lastName)
            .should('be.visible')
            .and('be.enabled')
            .type(lastName);
    }

    saveEmployee() {
        cy.get(this.selectors.saveButton)
            .should('be.visible')
            .and('be.enabled')
            .click();
    }

    verifyEmployeeSaved() {
        cy.get(this.selectors.successMessage)
            .should('be.visible');
    }

    verifyEmployeeListDisplayed() {
        cy.get(this.selectors.employeeList)
            .should('be.visible');
    }
}

export default PimPage;