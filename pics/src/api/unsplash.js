import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d25fedf00d063d52ab72fd106231420d7db394dffec23649f01c674623a3d9e5'
    },
});