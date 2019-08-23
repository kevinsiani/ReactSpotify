import React from 'react';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './style';
import Slider from 'rc-slider';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://www.designformusic.com/wp-content/uploads/2018/07/Digital-World-album-cover-design.jpg" alt="cover"/>

      <div>
        <span>Dital Time</span>
        <small>Love</small>
      </div> 
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="ShuffleIcon" ></img>
        </button>
        <button>
          <img src={BackwardIcon} alt="BackwardIcon" ></img>
        </button>
        <button>
          <img src={PlayIcon} alt="PlayIcon" ></img>
        </button>
        <button>
          <img src={ForwardIcon} alt="ForwardIcon" ></img>
        </button>
        <button>
          <img src={RepeatIcon} alt="RepeatIcon" ></img>
        </button>
      </Controls>

      <Time>
        <span>01:35</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>06:30</span>
      </Time>

    </Progress>


    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider 
        railStyle={{ abckground: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        
      />
    </Volume>
  </Container>
);

export default Player;