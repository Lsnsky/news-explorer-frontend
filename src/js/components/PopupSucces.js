import { Popup } from './Popup';

export class PopupSuccess extends Popup {
    constructor(popup) {
        super(popup);
        this.popup = popup;
        this.popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        });
    }

    open() {
        this.popup.classList.add('popup_is-opened');
    }

    close() {
        this.popup.classList.remove('popup_is-opened');

    }
}