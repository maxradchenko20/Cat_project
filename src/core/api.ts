import axios from 'axios';
import { config } from './config';

export const client = axios.create({
  headers: { 'x-a-key': config.apiKey },
});
