export class Popup {
    constructor(popup) {
            this.popup = popup;
            this.popup.querySelector('.popup__close').addEventListener('click', () => {
                this.close()
            });
        }
        // setContent() {

    // }
    // clearContent() {

    // }
    open() {
        this.popup.classList.add('popup_is-opened');
        this.popup.querySelector('.popup__button').setAttribute('disabled', true);
    }

    close() {
        this.popup.classList.remove('popup_is-opened');
        this.form = this.popup.querySelector('.form');
        this.passwordError = this.form.elements.password.closest('div').querySelector('.error-message');
        this.emailError = this.form.elements.email.closest('div').querySelector('.error-message');
        this.passwordError.textContent = '';
        this.emailError.textContent = '';
        this.form.reset();
    }
}