import ApiClient from '../../support/api/apiClient'; 
import DashboardPage from '../../pages/DashboardPage';
import users from '../../fixtures/users.json';

const apiClient = new ApiClient();
const dashboardPage = new DashboardPage();

describe('OrangeHRM - Employee API', () => { //Api check

    before(() => {
        cy.login(
            users.validUser.username,
            users.validUser.password
        );

        dashboardPage.visit();
    });

    it('should retrieve employees successfully', () => {

        apiClient
            .get('/web/index.php/api/v2/pim/employees')
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('data')
                    .that.is.an('array');

            });

    });

});