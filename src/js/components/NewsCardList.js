export class NewsCardList {
    constructor(container) {
        this.container = container;
    }

    createCard(urlToImage, description, publishedAt, title, sourceName) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('cards__item');
        cardItem.insertAdjacentHTML('afterbegin',
            `
        <div class="cards__item-image" style="background-image: url(${urlToImage})">
        <img alt="label" class="cards__item-label" src='./images/Rectangle-6.png'>
        <img alt="icon" class="cards__item-icon" src='./images/Rectangle-8.png'>
        </div>
        <div class="cards__item-content">
            <div class="cards__item-date">${publishedAt}</div>
            <h3 class="cards__item-title">${title}</h3>
            <p class="cards__item-text">${description}</p>
            <div class="cards__item-source">${sourceName}</div>
        </div>
        `);
        return cardItem;
    }

    renderResults(array) {

        for (const item of array) {
            const element =
                this.createCard(
                    item.urlToImage,
                    item.description,
                    item.publishedAt,
                    item.title,
                    item.source.name
                );
            this.container.appendChild(element);
        }
    }
    renderLoader() {

    }
    renderError() {

    }
    showMore() {

    }
    addCard() {

    }
}