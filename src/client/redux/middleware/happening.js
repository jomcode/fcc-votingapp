const happeningMiddleware = (store) => (next) => (action) => {
  const nextState = next(action);
  console.log('happeningMiddleware', action);
  return nextState;
};

export { happeningMiddleware };
