import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { HomePage } from '../components/pages/Home';
import { LoadingComponent } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';
// Set up Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import reducer/index.js as root reducer, it's where we're combining all our reducer files
import rootReducer from '../state';

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

afterEach(cleanup);

describe('<HomeContainer /> testing suite', () => {
  test('mounts a page', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <HomePage
            LoadingComponent={() => (
              <LoadingComponent message="...fetching profile" />
            )}
          />
        </Router>
      </Provider>
    );
    let inc = getByText(/Increment/i);
    expect(inc).toBeInTheDocument();

    let dev = getByText(/Decrement/i);
    expect(dev).toBeInTheDocument();
  });
});
