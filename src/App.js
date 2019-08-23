import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

function App() {
  return (
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
  );
}

export default App;
