import ApiClient from '../../support/api/apiClient';
import DashboardPage from '../../pages/DashboardPage';
import users from '../../fixtures/users.json';

const apiClient = new ApiClient();
const dashboardPage = new DashboardPage();

describe('OrangeHRM - Employee Search API', () => {

    before(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
    });

    it('should retrieve employees with valid parameters', () => {

        apiClient
            .get('/web/index.php/api/v2/pim/employees', {
                qs: {
                    limit: 10,
                    offset: 0
                }
            })
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('data')
                    .that.is.an('array');

                expect(response.body)
                    .to.have.property('meta');

            });

    });

});