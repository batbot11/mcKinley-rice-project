import axios from "axios";

const url = "https://reqres.in/api/login";

export default {
    login: (data) => axios.get(`${url}`, {
        headers: {
            'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'access-control-allow-methods': 'GET, POST, PUT',
            'access-control-allow-origin': '*',
            'server': 'cloudflare-nginx'
        }
    })
    .then(res => res.data)
    .catch(err => err.error)
}