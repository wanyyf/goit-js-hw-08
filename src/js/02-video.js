import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_FOR_TIME = 'videoplayer-current-time';
const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const localCurrentTime = localStorage.getItem(KEY_FOR_TIME);

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(KEY_FOR_TIME, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localCurrentTime);
