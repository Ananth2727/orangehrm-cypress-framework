import DashboardPage from '../../pages/DashboardPage';
import PimPage from '../../pages/PimPage';
import users from '../../fixtures/users.json';

const dashboardPage = new DashboardPage();
const pimPage = new PimPage();

describe('OrangeHRM - Dashboard', () => {

    beforeEach(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
    });

    it('should display the dashboard successfully', () => {
        dashboardPage.verifyPageLoaded();
    });

    it('should display the logged-in username', () => {
        dashboardPage.verifyLoggedInUser();
    });

    it('should navigate to the PIM module', () => {
        dashboardPage.navigateTo('PIM');
        pimPage.verifyPageLoaded();
    });

});