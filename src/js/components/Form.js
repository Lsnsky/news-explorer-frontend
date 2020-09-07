export class Form {
    constructor(popup, ERROR_MESSAGES) {
        this.ERROR_MESSAGES = ERROR_MESSAGES;
        this.popup = popup;
        this.form = popup.querySelector('.form');
        this.button = this.form.querySelector('.popup__button');
        this.form.addEventListener('input', this.validate.bind(this));
    }

    validate(event) {
        this._validateInputElement(event.target, event.target.closest('div').querySelector('.error-message'));
        this._validateForm(this.form, this.button);
    }

    _validateInputElement(input, error) {
        this.error = error;
        if (input.validity.valueMissing) {
            return this.error.textContent = this.ERROR_MESSAGES.valueMissing;
        }
        if (input.validity.tooShort) {
            return this.error.textContent = this.ERROR_MESSAGES.tooShort;
        }
        if (input.validity.tooLong) {
            return this.error.textContent = this.ERROR_MESSAGES.tooLong;
        }
        if (input.validity.typeMismatch) {
            return this.error.textContent = this.ERROR_MESSAGES.typeMismatch;
        }
        this.error.textContent = this.ERROR_MESSAGES.noError;
    }

    setSubmitButtonState() {

    }

    setServerError() {

    }

    _validateForm(form, button) {
        button.disabled = !form.checkValidity();

        if (!form.checkValidity()) {
            return button.classList.remove('popup__button_enabled');
        }
        if (form.checkValidity()) {
            return button.classList.add('popup__button_enabled');
        }
    }

    _clear() {
        this.form.reset();
    }

    _getInfo() {

    }

}