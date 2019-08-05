
const CoreAppApi = require('./App/Api');
const CoreAppViewer = require('./App/Viewer');

class App {
    /**
     * @type {CoreAppViewer}
     */
    get viewer () {
        return new CoreAppViewer();
    }

    withException () {}

    withEach (...methods) {
        return {
            bind: () => {}
        }
    }

    /**
     *
     * @param endpoint
     * @return {CoreAppApi}
     */
    api (endpoint) {
        return new CoreAppApi(endpoint);
    }

    /**
     * Create a link
     * @param uri
     * @param query
     * @return {string} Permalink
     */
    url (uri, query = {}) {}

    /**
     * Get the current URI string
     * @return {string}
     */
    uri () {}

    /**
     * Throw a "Page not found".
     * This can be called in any component at any point of its rendering and is
     * not bound to just controllers.
     *
     * @throws
     */
    throw404 () {}

    /**
     * Identify if we are in the Admin Control Panel
     *
     * @return {boolean}
     */
    isACP () {}
}

const app = window.app = new App();

export default app;
