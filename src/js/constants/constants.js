//constants

// popups
const REGISTRATION_POPUP = document.querySelector('.popup');
const LOGIN_POPUP = document.querySelector('.popup-login');
const SUCCESS_POPUP = document.querySelector('.popup-success');

// forms
const REGISTRATION_FORM = REGISTRATION_POPUP.querySelector('.popup__form');
const LOGIN_FORM = LOGIN_POPUP.querySelector('.popup__form');

// buttons & links
const REGISTRATION_BUTTON = REGISTRATION_POPUP.querySelector('.popup__button');
const LOGIN_BUTTON = LOGIN_POPUP.querySelector('.popup__button');
const CLOSE_BUTTON = document.querySelector('.popup__close');
const SEARCH_BUTTON = document.querySelector('.search__button');

const REGISTRATION_LINK = LOGIN_POPUP.querySelector('.popup__link');
const LOGIN_LINK = REGISTRATION_POPUP.querySelector('.popup__link');


//errors
const ERROR_MESSAGES = {
    incorrectEmail: 'Неправильный формат email',
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    tooLong: 'Должно быть от 2 до 30 символов',
    noError: ''
}

//api access
const NEWS_API_URL = 'http://newsapi.org/v2/everything?' +
    'sortBy=popularity&' +
    'apiKey=6ff509b3416d4cf18efd14bc688e163f';

//page elements
const HEADER = document.querySelector('.header');
const HEADER_BUTTON_AUTHORIZATION = HEADER.querySelector('.header__button');
const CARD_LIST = document.querySelector('.cards__container');
const SEARCH_INPUT = document.querySelector('.search__input');



export {
    REGISTRATION_POPUP,
    LOGIN_POPUP,
    SUCCESS_POPUP,
    REGISTRATION_FORM,
    LOGIN_FORM,
    REGISTRATION_LINK,
    LOGIN_LINK,
    REGISTRATION_BUTTON,
    LOGIN_BUTTON,
    CLOSE_BUTTON,
    NEWS_API_URL,
    HEADER,
    HEADER_BUTTON_AUTHORIZATION,
    CARD_LIST,
    SEARCH_BUTTON,
    SEARCH_INPUT
}