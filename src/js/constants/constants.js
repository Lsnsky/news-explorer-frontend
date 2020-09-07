//constants

// popups
const popupRegistration = document.querySelector('.popup');
const popupLogin = document.querySelector('.popup-login');
const popupSuccess = document.querySelector('.popup-success');

// forms
const formRegistration = popupRegistration.querySelector('.popup__form');
const formLogin = popupLogin.querySelector('.popup__form');

// buttons & links
const buttonRegistration = popupRegistration.querySelector('.popup__button');
const buttonLogin = popupLogin.querySelector('.popup__button');
const buttonClose = document.querySelector('.popup__close');
const buttonSearch = document.querySelector('.search__button');
const buttonLogout = document.querySelector('.header__logout');
const iconSaveArticle = document.querySelector('.cards__item-icon');

const linkRegistration = popupLogin.querySelector('.popup__link');
const linkLogin = popupRegistration.querySelector('.popup__link');
const linkSuccessRegistration = popupSuccess.querySelector('.popup__link');


//errors
const ERROR_MESSAGES = {
    typeMismatch: 'Неправильный формат email',
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    tooLong: 'Должно быть от 2 до 30 символов',
    noError: ''
}

//api access
const NEWS_API_URL_DEV = 'http://newsapi.org/v2/everything?' +
    'sortBy=popularity&' +
    'pageSize=20&' +
    'apiKey=6ff509b3416d4cf18efd14bc688e163f';

const NEWS_API_URL_DEPLOY = 'https://praktikum.tk/news/v2/everything?' +
    'sortBy=popularity&' +
    'pageSize=20&' +
    'apiKey=6ff509b3416d4cf18efd14bc688e163f';

const isDev = process.env.NODE_ENV === 'development' ? NEWS_API_URL_DEV : NEWS_API_URL_DEPLOY;

//page elements
const headerBlock = document.querySelector('.header');
const buttonAuthHeader = headerBlock.querySelector('.header__button');
const containerCards = document.querySelector('.cards__container');
const inputSearch = document.querySelector('.search__input');
const loaderBlock = document.querySelector('.loader');
const notFoundBlock = document.querySelector('.search-not-found');
const cardsBlock = document.querySelector('.cards');

const inputEmail = document.querySelector('.popup__input_type_email');
const inputPassword = document.querySelector('.popup__input_type_password');
const inputName = document.querySelector('.popup__input_type_name');
let PROPS = {
    isLoggedIn: '',
    userName: ''
}



export {
    popupRegistration,
    popupLogin,
    popupSuccess,
    formRegistration,
    formLogin,
    linkRegistration,
    linkLogin,
    buttonRegistration,
    buttonLogin,
    buttonClose,
    isDev,
    headerBlock,
    buttonAuthHeader,
    containerCards,
    buttonSearch,
    inputSearch,
    loaderBlock,
    notFoundBlock,
    cardsBlock,
    inputEmail,
    inputPassword,
    inputName,
    linkSuccessRegistration,
    PROPS,
    buttonLogout,
    ERROR_MESSAGES,
    iconSaveArticle
}