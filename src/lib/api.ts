import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:9000',
    headers: { Accept: 'application/json' }
});
