import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { middleware as notificationsMiddleware } from 'react-redux-notifications';

import rootReducer from '../reducers';

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, notificationsMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};
