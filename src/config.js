const config = {
  apiUrl: process.env.NODE_ENV === 'production' ? 'https://magic-habit-api.herokuapp.com/v1/' : 'http://localhost:8080/v1/',
  emailSupport: 'marc.louvion@gmail.com',
};

export default config;
