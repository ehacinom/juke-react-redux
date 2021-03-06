import {SET_LYRICS} from '../constants';
import axios from 'axios';

export const setLyrics = text => ({
  type: SET_LYRICS,
  text
});

export const searchLyrics = (artist, song) => {
  console.log('hey here in actioncreators lyrics')
  return dispatch => {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      })
  };
};
