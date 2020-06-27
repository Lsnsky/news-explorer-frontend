export class Header {
    constructor(header) {
        this.header = header;
    }

    render(props) {
        if (props.isLoggedIn) {
            this.header.querySelector('.header__articles').classList.add('header__articles_is-active');
            this.header.querySelector('.header__button').classList.add('header__button_no-active');
            this.header.querySelector('.header__button-user').classList.add('header__button-user_active');
            this.header.querySelector('.header__logout').classList.add('header__logout_active');
            this.header.querySelector('.header__button-user').textContent = props.userName;
        }
    }
    renderLoggedOut() {

        this.header.querySelector('.header__articles').classList.remove('header__articles_is-active');
        this.header.querySelector('.header__button').classList.remove('header__button_no-active');
        this.header.querySelector('.header__button-user').classList.remove('header__button-user_active');
        this.header.querySelector('.header__logout').classList.remove('header__logout_active');
        this.header.querySelector('.header__button-user').textContent = '';

    }
}

// { isLoggedIn, userName }