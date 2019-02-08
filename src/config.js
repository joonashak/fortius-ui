import store from './index';

const env = process.env.NODE_ENV;

export const apiUri = env === 'production'
  ? '/api/v1'
  : 'http://localhost:5000/api/v1';

export const getAxiosConfig = () => {
  const { token } = store.getState().user;
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};
