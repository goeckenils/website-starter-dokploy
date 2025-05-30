export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  origin: env('CORS_ORIGIN').split(','),
  url: "http://api.needmore.online"
});
