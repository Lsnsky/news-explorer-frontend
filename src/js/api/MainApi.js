export class MainApi {
    constructor() {}
    signup(email, password, name) {
        return fetch('http://localhost:3000/signup', {
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

    }
    createArticle() {

    }
    removeArticle() {

    }
}