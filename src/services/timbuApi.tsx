import axios from 'axios';
import { CgOrganisation } from 'react-icons/cg';
declare global {
    interface ImportMeta {
      env: {
        [key: string]: string;
      };
    }
  }

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,

});

export const getProducts = (page = 1, size = 10) =>
  api.get('/product', {
    params: {
      organization_id: import.meta.env.VITE_ORGANIZATION_ID,
      Appid: import.meta.env.VITE_APP_ID,
      Apikey: import.meta.env.VITE_API_KEY,
      page,
      size,
    },
  });