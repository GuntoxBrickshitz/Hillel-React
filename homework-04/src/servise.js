import axios from 'axios';

const userAPI = {
    baseURL: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers'
}

export default axios.create({
    baseURL: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});