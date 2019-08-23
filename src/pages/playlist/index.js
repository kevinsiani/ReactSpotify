import React from 'react';

import { Container, Header, SongList } from './style';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/add_playlist.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://www.designformusic.com/wp-content/uploads/2018/07/Digital-World-album-cover-design.jpg" alt="Cover" />

      <div>
        <span>PLAYSLISTS</span>
        <h1>Rock forever</h1>
        <p>13 Músicas</p>

        <button>PLAY</button>
      </div>

    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;