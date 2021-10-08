import * as api from 'api.js';

export async function post(req, res) {

    api.post('sessions', {user}).then(response =>{
        if(response.user) req.session.user = response.user;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(response));
    })
}