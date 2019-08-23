import React from 'react';
import { Container, Search, User } from './style';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Seacrh" />
    </Search>

    <User>
      <img src="https://imgix.ranker.com/user_node_img/50082/1001620426/original/never-trust-anyone-too-much-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="avatar" />
      Kevin siani
    </User>
  </Container>
);

export default Header;