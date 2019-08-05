
const UserEntity = require('../../User/Entity');

export default class CoreAppViewer {
    /**
     * @type {UserEntity}
     */
    get () {
        return new UserEntity();
    }

    /**
     * Get the current viewers ID.
     * @return {number}
     */
    id () {
        return this.get().id;
    }

    /**
     * Check if viewer is logged in or not.
     * @return {boolean}
     */
    isLoggedIn () {}

    can (setting, user = null) {}
}
