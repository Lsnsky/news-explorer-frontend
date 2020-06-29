import './index.css';

import {
    popupRegistration,
    popupLogin,
    popupSuccess,
    formRegistration,
    formLogin,
    linkRegistration,
    linkLogin,
    buttonRegistration,
    buttonLogin,
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
from './js/constants/constants';

import { MainApi } from './js/api/MainApi';
import { NewsApi } from './js/api/NewsApi';
import { Form } from './js/components/Form';
import { NewsCardList } from './js/components/NewsCardList';
import { Popup } from './js/components/Popup';
import { PopupRegistration } from './js/components/PopupRegistration';
import { PopupSuccess } from './js/components/PopupSucces';
import { dateFormat } from './js/utils/dateFormat';
import { Header } from './js/components/Header';


const registrationPopup = new PopupRegistration(popupRegistration);
const loginPopup = new Popup(popupLogin);
const successPopup = new PopupSuccess(popupSuccess);
const newsApi = new NewsApi(isDev);
const cardList = new NewsCardList(containerCards);
const mainApi = new MainApi();
const header = new Header(headerBlock);

//валидация форм

const loginValidator = new Form(popupLogin, ERROR_MESSAGES);
const signupValidator = new Form(popupRegistration, ERROR_MESSAGES);


//слушатели

// iconSaveArticle.addEventListener('click', () => {
//     mainApi.createArticle()
//         .then
// });

buttonLogout.addEventListener('click', () => {
    mainApi.logout()
        .then((res) => {
            // if (res.ok) {
            window.location.reload();
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


buttonLogin.addEventListener('click', (event) => {
    // event.preventDefault();
    // window.location.reload();
    mainApi.signin(
            formLogin.email.value,
            formLogin.password.value
        )
        .then(() => {
            window.location.reload();
            header.render(PROPS);
            // console.log(res);
            formLogin.reset();
            loginPopup.close();
            return;
        })
        .catch((err) => {
            console.log(err);
        });
})

buttonRegistration.addEventListener('click', (event) => {
    event.preventDefault();
    mainApi.signup(
            inputEmail.value,
            inputPassword.value,
            inputName.value
        )
        .then((res) => {
            console.log(res);
            formRegistration.reset();
            registrationPopup.close();
            successPopup.open();
            return;
        })
        .catch((err) => {
            console.log(err);
        });
});

linkSuccessRegistration.addEventListener('click', () => {
    successPopup.close();
    loginPopup.open();
})

buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    const date = dateFormat();
    containerCards.textContent = '';
    loaderBlock.classList.add('loader_is-active');
    notFoundBlock.classList.remove('search-not-found_is-active');
    cardsBlock.classList.remove('cards_is-active');
    newsApi.getNews(inputSearch.value, date.startSearchDate, date.currentDate)
        .then((data) => {
            loaderBlock.classList.remove('loader_is-active');
            if (data.articles.length === 0) {
                notFoundBlock.classList.add('search-not-found_is-active');
                cardsBlock.classList.remove('cards_is-active');
                return;
            }
            cardList.renderResults(data.articles);
            cardsBlock.classList.add('cards_is-active');
            return;
        })
        .catch((err) => { console.log(err) })
});


buttonAuthHeader.addEventListener('click', () => {
    loginPopup.open();
});

linkRegistration.addEventListener('click', () => {
    loginPopup.close();
    registrationPopup.open();
});

linkLogin.addEventListener('click', () => {
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

// document.addEventListener("click", function(e) {
//     console.log(e.target);
// });