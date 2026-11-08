import axiosService from "../api/axiosService";

// register a new user
export const registerApi = async(user) => {
  return await axiosService('POST', '/users',user)
}

// check whether the email already exist
export const checkEmailApi = async (email) => {
  return await axiosService('GET', `/users?email=${email}`);
};

// check email and password match
export const loginApi = async(loginData) => {
  return await axiosService('GET', `/users?email=${loginData.email}&password=${loginData.password}`)
}