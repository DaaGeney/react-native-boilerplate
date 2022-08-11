/* eslint-disable no-underscore-dangle */
/*
    These ajax interceptors are useful for:
        - Process the request to be sent to the server.
        - Process the response received from the server.
        - Show the loading page when the HTTP request is in progress.
        - Show a notification when the server sends a message in the response,
          or when there is an error executing the request.
        - Send the Bearer Authentication Token for all requests.

    Process the request:
        - If ajaxInterceptors.convertRequestDataTo is set to "PascalCase"
          into the globals.json file, all request arguments will be
          sent in PascalCase.
        - If ajaxInterceptors.convertRequestDataTo is set to "camelCase"
          into the globals.json file, all request arguments will be
          sent in camelCase.
        - You can override above configuration for a particular request as
          show bellow. You can use again "PascalCase", "camelCase" or "none"
          (none means no convertion is done):
            axios.post(config.services.user.login, {
                params: { userName, password },
                settings: { convertRequestDataTo: "none" }
            })

*/

// @packages
import axios from 'axios';
import store from '../store';


const addRequestInterceptors = () => {
  axios.interceptors.request.use(
    (request) => {
      request.headers = request.headers ?? {};
      const { authToken } = store.getState().user;

      if (authToken) {
        request.headers.Authorization = `Bearer ${authToken}`;
      }

      request.headers['Content-Type'] = 'application/json';

      return request;
    },
    (error) => {
      throw error;
    }
  );
};

const addResponseInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      if (!response?.config) {
        return response;
      }

      return response.data;
    },
    (error) => {
      throw error;
    }
  );
};

export const addAjaxInterceptors = () => {
  addRequestInterceptors();
  addResponseInterceptors();
};
