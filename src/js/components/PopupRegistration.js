import { Popup } from './Popup';

export class PopupRegistration extends Popup {
    constructor(popup) {
        super(popup);
        this.popup = popup;
        this.popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        });
    }

    open() {
        this.popup.classList.add('popup_is-opened');
        this.popup.querySelector('.popup__button').setAttribute('disabled', true);
    }

    close() {
        this.popup.classList.remove('popup_is-opened');
        this.form = this.popup.querySelector('.form');
        this.nameError = this.form.elements.name.closest('div').querySelector('.error-message');
        this.passwordError = this.form.elements.password.closest('div').querySelector('.error-message');
        this.emailError = this.form.elements.email.closest('div').querySelector('.error-message');
        this.nameError.textContent = '';
        this.passwordError.textContent = '';
        this.emailError.textContent = '';
        this.form.reset();
    }
}