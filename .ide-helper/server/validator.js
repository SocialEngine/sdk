
class SDKValidatorQuery {
    constructor(key) {
        this._key = key;
    }

    string () {}

    array () {}
}

export default class SDKValidator {
    where (key) {
        return new SDKValidatorQuery(key);
    }
}
