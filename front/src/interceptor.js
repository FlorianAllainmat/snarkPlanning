"use strict";

import axios from "axios";

function notAuthorized(response) {
  if (response.success === false) {
    if (response.errors && response.errors[0] && response.errors[0].slug === "token-expired") {
      return true;
    }
  }
}

function define(router) {
  axios.interceptors.response.use(function (response) {
    const realResponse = response.data;

    if (notAuthorized(realResponse)) {
      this.$router.push("/");
      return Promise.resolve(response);
    }
    return response;
  }, function (err) {
    return Promise.reject(err);
  });
}

export default {
  define
};
