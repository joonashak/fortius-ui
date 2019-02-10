import axios from 'axios';
import { apiUri } from '../config';


const uri = `${apiUri}/login`;

/**
 * Attempt a login with given credentials.
 * Upon successful login, an object with the resulting JWT token under key *token* is returned.
 * (This is implied by Fortius API specification). Otherwise, the resulting error object is
 * returned under key *error* (thus, status code, e.g., is found at *result.error.response.status*)
 * @param {string} username
 * @param {string} password
 */
const login = async (username, password) => {
  try {
    const result = await axios.post(uri, { username, password });
    return result.data;
  } catch (error) {
    return { error };
  }
};

export default { login };
