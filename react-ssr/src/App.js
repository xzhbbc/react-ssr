import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Route'
import { Provider } from 'react-redux';
import { getStore } from './redux/index';

const  App = (props) => {
  return (
    <div>
      <div>头部</div>
      {/* {renderRoutes(props.route.routes)} */}
      <Provider store={getStore()}>
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
