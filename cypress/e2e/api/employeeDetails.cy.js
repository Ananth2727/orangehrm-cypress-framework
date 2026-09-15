import ApiClient from '../../support/api/apiClient';
import DashboardPage from '../../pages/DashboardPage';
import users from '../../fixtures/users.json';

const apiClient = new ApiClient();
const dashboardPage = new DashboardPage();

describe('OrangeHRM - Employee Details API', () => {

    before(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
    });

    it('should retrieve employee details successfully', () => {

        apiClient
            .get('/web/index.php/api/v2/pim/employees', {
                qs: {
                    limit: 1,
                    offset: 0
                }
            })
            .then((response) => {

                expect(response.status).to.eq(200);

                const employee = response.body.data[0];

                expect(employee).to.have.property('empNumber');

                return apiClient.get(
                    `/web/index.php/api/v2/pim/employees/${employee.empNumber}`
                );

            })
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('data');

            });

    });

});