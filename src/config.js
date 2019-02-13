const env = process.env.NODE_ENV;
let token = '';

export const apiUri = env === 'production'
  ? '/api/v1'
  : 'http://localhost:5000/api/v1';

export const configureToken = (newToken) => {
  token = newToken;
};

export const getAxiosConfig = () => ({
  headers: {
    Authorization: `bearer ${token}`,
  },
});
