const config = {
  api_url: process.env.NODE_ENV === 'production' ? 'https://magic-habit-api.herokuapp.com/v1/' : 'http://localhost:3000/v1/',
};

export default config;
