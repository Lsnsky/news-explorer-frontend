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
    CLOSE_BUTTON,
    NEWS_API_URL,
    HEADER,
    HEADER_BUTTON_AUTHORIZATION,
    CARD_LIST,
    SEARCH_BUTTON,
    SEARCH_INPUT
}
from './js/constants/constants';

// import { MainApi } from './js/api/MainApi';
import { NewsApi } from './js/api/NewsApi';
// import { Form } from './js/components/Form';
// import { Header } from './js/components/Header';
// import { NewsCard } from './js/components/NewsCard';
// import { NewsCardList } from './js/components/NewsCardList';
import { Popup } from './js/components/Popup';
// import { BaseComponent } from './js/utils/BaseComponent';
// import { DateFormat } from './js/utils/DateFormat';
import { dateFormat } from './js/utils/dateFormat';

const registrationPopup = new Popup(REGISTRATION_POPUP);
const loginPopup = new Popup(LOGIN_POPUP);
const successPopup = new Popup(SUCCESS_POPUP);
const newsApi = new NewsApi(NEWS_API_URL);


//listeners
SEARCH_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    const date = dateFormat();
    newsApi.getNews(SEARCH_INPUT.value, date.startSearchDate, date.currentDate)
        .then((data) => { console.log({ data }) })
        .catch((err) => { console.log(err.message) })
})


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