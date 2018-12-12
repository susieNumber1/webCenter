
import axios from 'axios'
import * as utils from '../assets/js/utils.js'
import axiosConfig from './config'

//
const defaultConfig = {
    showLoading: false,
    method: 'POST',
    timeout: 20000,
    ...axiosConfig
};
axios.interceptors.request.use(
    config => {
      // console.log('request-success',config);
      if(config.showLoading){
        utils.showLoading();
      }
      return config;
    },error =>{
      console.log('request-error');
    }
);
axios.interceptors.response.use(
    response =>{
      // console.log('response-success',response);
      utils.hideLoading();
      return response.data;
    },
    error =>{
      console.log('response-error',error);
      utils.hideLoading();
    }
);

export default {
    get: (url, config) => axios.get(url, { ...defaultConfig, ...config }),
    put: (url, data, config) => axios.put(url, data, { ...defaultConfig, ...config }),
    post: (url, data, config) => axios.post(url, data, { ...defaultConfig, ...config }),
    patch: (url, data, config) => axios.patch(url, data, { ...defaultConfig, ...config }),
    delete: (url, data, config) => axios.delete(url, { ...defaultConfig, ...config })
  };
