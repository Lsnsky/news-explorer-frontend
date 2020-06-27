import './index.css';

import {
    REGISTRATION_POPUP,
    LOGIN_POPUP,
    SUCCESS_POPUP,
    REGISTRATION_FORM,
    LOGIN_FORM,
    REGISTRATION_LINK,
    LOGIN_LINK,
    REGISTRATION_BUTTON,
    LOGIN_BUTTON,
    // CLOSE_BUTTON,
    NEWS_API_URL,
    HEADER,
    HEADER_BUTTON_AUTHORIZATION,
    CARD_LIST,
    SEARCH_BUTTON,
    SEARCH_INPUT,
    LOADER,
    SEARCH_NOT_FOUND,
    CARDS,
    EMAIL_INPUT,
    PASSWORD_INPUT,
    NAME_INPUT,
    SUCCESS_REGISTRATION_LINK,
    PROPS,
    LOGOUT_BUTTON,
    ERROR_MESSAGES
}
from './js/constants/constants';

import { MainApi } from './js/api/MainApi';
import { NewsApi } from './js/api/NewsApi';
import { Form } from './js/components/Form';
// import { NewsCard } from './js/components/NewsCard';
import { NewsCardList } from './js/components/NewsCardList';
import { Popup } from './js/components/Popup';
import { PopupRegistration } from './js/components/PopupRegistration';
import { PopupSuccess } from './js/components/PopupSucces';
import { dateFormat } from './js/utils/dateFormat';
import { Header } from './js/components/Header';


const registrationPopup = new PopupRegistration(REGISTRATION_POPUP);
const loginPopup = new Popup(LOGIN_POPUP);
const successPopup = new PopupSuccess(SUCCESS_POPUP);
const newsApi = new NewsApi(NEWS_API_URL);
const cardList = new NewsCardList(CARD_LIST);
const mainApi = new MainApi();
const header = new Header(HEADER);
const loginValidator = new Form(LOGIN_POPUP, ERROR_MESSAGES);
const signupValidator = new Form(REGISTRATION_POPUP, ERROR_MESSAGES);


//listeners

LOGOUT_BUTTON.addEventListener('click', () => {
    mainApi.logout()
        .then((res) => {
            // if (res.ok) {
            window.location.reload()
            header.renderLoggedOut();
            PROPS.isLoggedIn = '';
            PROPS.userName = '';
            // }
            // return Promise.reject();
        })
        .catch((err) => {
            console.log(err)
        })
})


LOGIN_BUTTON.addEventListener('click', (event) => {
    // event.preventDefault();
    window.location.reload()
    mainApi.signin(
            LOGIN_FORM.email.value,
            LOGIN_FORM.password.value
        )
        .then(() => {
            header.render(PROPS);
            // console.log(res);
            LOGIN_FORM.reset();
            loginPopup.close();
            return;
        })
        .catch((err) => {
            console.log(err);
        });
})

REGISTRATION_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    mainApi.signup(
            EMAIL_INPUT.value,
            PASSWORD_INPUT.value,
            NAME_INPUT.value
        )
        .then((res) => {
            console.log(res);
            REGISTRATION_FORM.reset();
            registrationPopup.close();
            successPopup.open();
            return;
        })
        .catch((err) => {
            console.log(err);
        });
});

SUCCESS_REGISTRATION_LINK.addEventListener('click', () => {
    successPopup.close();
    loginPopup.open();
})

SEARCH_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    const date = dateFormat();
    CARD_LIST.textContent = '';
    LOADER.classList.add('loader_is-active');
    SEARCH_NOT_FOUND.classList.remove('search-not-found_is-active');
    CARDS.classList.remove('cards_is-active');
    newsApi.getNews(SEARCH_INPUT.value, date.startSearchDate, date.currentDate)
        .then((data) => {
            LOADER.classList.remove('loader_is-active');
            if (data.articles.length === 0) {
                SEARCH_NOT_FOUND.classList.add('search-not-found_is-active');
                CARDS.classList.remove('cards_is-active');
                return;
            }
            cardList.renderResults(data.articles);
            CARDS.classList.add('cards_is-active');
            return;
        })
        .catch((err) => { console.log(err) })
});


HEADER_BUTTON_AUTHORIZATION.addEventListener('click', () => {
    loginPopup.open();
});

REGISTRATION_LINK.addEventListener('click', () => {
    loginPopup.close();
    registrationPopup.open();
});

LOGIN_LINK.addEventListener('click', () => {
    registrationPopup.close();
    loginPopup.open();
});


mainApi.getUserData()
    .then((data) => {
        PROPS.isLoggedIn = true;
        PROPS.userName = data.data.name;
        header.render(PROPS);
        console.log(data);

        return;
    })
    .catch((err) => {
        console.log(err)
    });