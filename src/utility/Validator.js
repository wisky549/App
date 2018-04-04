const Validator = {
    onChange: function (component, e) {
        var value = e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value;

        component.setState({
            [e.target.name]: value
        })

        Validator.showInputError(component, e.target.name);
    },

    showFormErrors: function (component, e) {

        e.preventDefault();

        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input
                .classList
                .add('active');

            const isInputValid = this.showInputError(component, input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    },

    showInputError: function (component, refName) {
        if (component.refs[refName] != null) {
            const validity = component.refs[refName].validity;
            var label = refName;
            const lbE = document.getElementById(`${refName}Label`);
            if (lbE) {
                label = lbE.textContent;
            }

            const isPassword = refName.indexOf('password') !== -1;
            const isPasswordConfirm = refName === 'passwordConfirm';

            if (isPasswordConfirm) {
                if (component.refs.password.value !== component.refs.passwordConfirm.value) {
                    component
                        .refs
                        .passwordConfirm
                        .setCustomValidity('Passwords do not match');
                } else {
                    component
                        .refs
                        .passwordConfirm
                        .setCustomValidity('');
                }
            }

            const error = document.getElementById(`${refName}Error`);
            if (error != null) {
                if (!validity.valid) {
                    if (validity.valueMissing) {
                        error.textContent = `${label} is a required field`;
                    } else if (validity.typeMismatch) {
                        error.textContent = `${label} should be a valid email address`;
                    } else if (isPassword && validity.patternMismatch) {
                        error.textContent = `${label} should be longer than 4 chars`;
                    } else if (isPasswordConfirm && validity.customError) {
                        error.textContent = 'Passwords do not match';
                    }
                    return false;
                }

                error.textContent = '';
            }
        }

        return true;
    }
}

export default Validator;