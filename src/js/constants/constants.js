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
const LOGOUT_BUTTON = document.querySelector('.header__logout');

const REGISTRATION_LINK = LOGIN_POPUP.querySelector('.popup__link');
const LOGIN_LINK = REGISTRATION_POPUP.querySelector('.popup__link');
const SUCCESS_REGISTRATION_LINK = SUCCESS_POPUP.querySelector('.popup__link');


//errors
const ERROR_MESSAGES = {
    typeMismatch: 'Неправильный формат email',
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    tooLong: 'Должно быть от 2 до 30 символов',
    noError: ''
}

//api access
const NEWS_API_URL = 'http://newsapi.org/v2/everything?' +
    'sortBy=popularity&' +
    'pageSize=10&' +
    'apiKey=6ff509b3416d4cf18efd14bc688e163f';

//page elements
const HEADER = document.querySelector('.header');
const HEADER_BUTTON_AUTHORIZATION = HEADER.querySelector('.header__button');
const CARD_LIST = document.querySelector('.cards__container');
const SEARCH_INPUT = document.querySelector('.search__input');
const LOADER = document.querySelector('.loader');
const SEARCH_NOT_FOUND = document.querySelector('.search-not-found');
const CARDS = document.querySelector('.cards');

const EMAIL_INPUT = document.querySelector('.popup__input_type_email');
const PASSWORD_INPUT = document.querySelector('.popup__input_type_password');
const NAME_INPUT = document.querySelector('.popup__input_type_name');
let PROPS = {
    isLoggedIn: '',
    userName: ''
}



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