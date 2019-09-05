/* eslint-disable prettier/prettier */
const token = sessionStorage.getItem("token");
const baseUrl = "https://ah-lobos-backend-swagger.herokuapp.com";

/**
 *
 * @param {string} url
 * @param {object} data
 * @returns {object} server response
 */
const putData = async (url, data) => {
  const request = new Request(baseUrl + url, {
    method: "put",
    mode: "cors",
    cache: "reload",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    }
  });
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    return error;
  }
};


/**
 *
 * @param {string} url
 * @param {object} data
 * @returns {object} server response
 */
const postData = async (url, data) => {
  const request = new Request(baseUrl + url, {
    method: "post",
    mode: "cors",
    cache: "reload",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    }
  });
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    return error;
  }
};
/**
 *
 * @param {string} url
 * @param {object} data
 * @returns {object} server response
 */
const getData = async url => {
  const request = new Request(baseUrl + url, {
    method: "get",
    mode: "cors",
    cache: "reload",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token: token || ""
    }
  });
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} url
 * @param {object} data(image)
 * @returns {object} server response
 */
const imageUpload = async (url, data) => {
  try {
    const formData = new FormData();
    formData.append('image', data.usr);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "put",
      mode: "cors",
      cache: "reload",
      body: formData,
      headers: {
        token
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { getData, putData, postData, imageUpload };
