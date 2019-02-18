import axios from 'axios';
import { apiUri, getAxiosConfig } from '../config';


const uri = `${apiUri}/users`;

/**
 * Attempt to register a new user with given data.
 * Data must include at least a username and a password. E-mail is optional.
 * @param {object} data - Must have keys `username` and `password`, `email` is optional.
 */
const create = async (data) => {
  try {
    const result = await axios.post(uri, data);
    return result.data;
  } catch (error) {
    return { error };
  }
};

/**
 * Attempt to update logged in user's data.
 * Follows the JSON Merge Patch format.
 * @param {object} data - Only included fields are updated.
 */
const update = async (data) => {
  const config = getAxiosConfig();

  try {
    const result = await axios.patch(uri, data, config);
    return result.data;
  } catch (error) {
    return { error };
  }
};

export default { create, update };
