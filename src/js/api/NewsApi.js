export class NewsApi {
    constructor(url) {
        this.url = url;

    }
    getNews(textInput, startDate, currentDate) {
        return fetch(`${this.url}&q=${textInput}&from=${startDate}&to=${currentDate}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject()
                }
                console.log(res.json());
            })
    }
}