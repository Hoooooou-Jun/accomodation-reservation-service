import axios from 'axios';
import { requestDomain } from './domain';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
export const request = axios.create({ baseURL: requestDomain })