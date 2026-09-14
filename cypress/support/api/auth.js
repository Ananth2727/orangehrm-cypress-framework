class ApiAuth {

    getToken() {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/oauth/2.0/token`,
            form: true,
            body: {
                grant_type: 'client_credentials',
                client_id: Cypress.env('clientId'),
                client_secret: Cypress.env('clientSecret')
            }
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('access_token');

            return response.body.access_token;
        });
    }

}

export default ApiAuth;