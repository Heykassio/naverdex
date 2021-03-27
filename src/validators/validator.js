class Validator {
    errors = [];

    emailValidate(email, message) {
        const regex = /^[^\s@]+@[^\s@]+$/;
        if (!regex.test(email)) {
            this.errors.push({ message });
        }
    }

    emptyValidate(value, message) {
        if(!value || value.length === 0) {
            this.errors.push({ message });
        }
    }

}

module.exports = Validator;