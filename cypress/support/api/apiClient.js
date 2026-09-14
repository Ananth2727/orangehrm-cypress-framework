class ApiClient {

    request(method, url, options = {}) {
        return cy.request({
            method,
            url,
            ...options
        });
    }

    get(url, options = {}) {
        return this.request('GET', url, options);
    }

    post(url, body, options = {}) {
        return this.request('POST', url, {
            body,
            ...options
        });
    }

    put(url, body, options = {}) {
        return this.request('PUT', url, {
            body,
            ...options
        });
    }

    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
}

export default ApiClient;