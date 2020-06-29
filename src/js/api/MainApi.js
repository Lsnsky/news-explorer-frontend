export class MainApi {
    constructor() {}
    signup(email, password, name) {
        return fetch('http://localhost:3000/signup', {
                // return fetch('https://api.news-explorer.best/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    name
                })
            })
            .then((res) => { return res.json() })

    }

    signin(email, password) {
        return fetch('http://localhost:3000/signin', {
                // return fetch('https://api.news-explorer.best/signin', {

                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                localStorage.setItem('token', data.token);
            });
    }

    getUserData() {
        return fetch('http://localhost:3000/users/me', {
                // return fetch('https://api.news-explorer.best/users/me', {

                method: 'GET',
                credentials: 'include',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (res.ok) {
                    return (res.json());
                }
                return Promise.reject({ error: res.status });
            });
    }

    logout() {
        return fetch('http://localhost:3000/logout', {
                // return fetch('https://api.news-explorer.best/logout', {

                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res);
            })
            .then((data) => {
                console.log(data);
                localStorage.removeItem('token');
            })
    }


    getArticles() {
        return fetch('http://localhost:3000/articles', {
                // return fetch('https://api.news-explorer.best/articles', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })

    }
    createArticle(article) {
        return fetch('http://localhost:3000/articles', {
                // return fetch('https://api.news-explorer.best/articles', {

                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    keyword: article.keyWord,
                    title: article.title,
                    text: article.description,
                    date: article.publishedAt,
                    source: article.source.name,
                    link: article.url,
                    image: article.urlToImage
                })
            })
            .then((res) => {
                // if (res.ok) {
                return res.json();
                // }
                // return Promise.reject({ error: res.status });
            });
    }
    removeArticle(id) {
        return fetch(`http://localhost:3000/articles/${id}`, {
                // return fetch(`https://api.news-explorer.best/articles/${id}`, {

                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
    }
}