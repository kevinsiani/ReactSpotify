import React, { Fragment } from 'react';

import { GlobalStyle } from './styles/global';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <Fragment>
      <Sidebar />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
