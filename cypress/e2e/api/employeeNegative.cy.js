import ApiClient from '../../support/api/apiClient';
import DashboardPage from '../../pages/DashboardPage';
import users from '../../fixtures/users.json';

const apiClient = new ApiClient();
const dashboardPage = new DashboardPage();

describe('OrangeHRM - Employee API - Invalid Employee', () => {

    before(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
    });

    it('should return 422 for an invalid employee endpoint', () => {

        apiClient
            .get('/web/index.php/api/v2/pim/employees/999999999', {
                failOnStatusCode: false
            })
            .then((response) => {

                expect(response.status).to.eq(422);

            });

    });

});