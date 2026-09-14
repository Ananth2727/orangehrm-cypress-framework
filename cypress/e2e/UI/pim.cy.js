import DashboardPage from '../../pages/DashboardPage';
import PimPage from '../../pages/PimPage';
import users from '../../fixtures/users.json';
import employees from '../../fixtures/employees.json';

const dashboardPage = new DashboardPage();
const pimPage = new PimPage();

describe('OrangeHRM - PIM', () => {

    beforeEach(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
        dashboardPage.navigateTo('PIM');
        pimPage.verifyPageLoaded();
    });

    employees.employees.forEach((employee) => {

        it(`should add employee - ${employee.firstName} ${employee.lastName}`, () => {

            pimPage.clickAddEmployee();

            pimPage.enterEmployeeDetails(
                employee.firstName,
                employee.middleName,
                employee.lastName
            );

            pimPage.saveEmployee();

            pimPage.verifyEmployeeSaved();
        });

    });

});