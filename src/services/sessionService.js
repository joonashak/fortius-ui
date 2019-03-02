import axios from 'axios';
import { apiUri, getAxiosConfig } from '../config';


const uri = `${apiUri}/sessions`;

/**
 * Get logged in user's sessions.
 * @param {string} type Session type to fetch, 'workouts' or 'plans'.
 * @param {string} order Sort order (for pagination), 'asc' or 'desc'.
 * @param {int} page Pagination page number. Too large values return 404.
 */
const get = async (type, order, page) => {
  const config = getAxiosConfig();

  try {
    const result = await axios.get(`${uri}/${type}/${order}/${page}`, config);
    return result.data;
  } catch (error) {
    return { error };
  }
};

export default { get };
