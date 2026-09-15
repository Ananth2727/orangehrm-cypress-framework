import DashboardPage from '../../pages/DashboardPage';
import LeavePage from '../../pages/LeavePage';
import users from '../../fixtures/users.json';

const dashboardPage = new DashboardPage();
const leavePage = new LeavePage();

describe('OrangeHRM - Leave', () => {

    beforeEach(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
        dashboardPage.navigateTo('Leave');
        leavePage.verifyPageLoaded();
    });

    it('should display the leave page successfully', () => {
        leavePage.verifyLeaveTableDisplayed();
    });

});