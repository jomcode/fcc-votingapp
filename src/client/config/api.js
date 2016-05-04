const rootUrl = process.env.NODE_ENV === 'production' ?
  `${window.location.origin}/api/v1` :
  'http://localhost:3000/api/v1';

export { rootUrl };
