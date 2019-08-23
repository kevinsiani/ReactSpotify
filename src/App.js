import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Provider } from 'react-redux';
import { Wrapper, Container, Content } from './styles/components';

import './config/reactotron';

import Routes from './routes';
import store from './store';



import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
console.tron.log('Bora');
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
          <GlobalStyle />
        </Wrapper>
      </Router>
      </Provider>
  );
}

export default App;
