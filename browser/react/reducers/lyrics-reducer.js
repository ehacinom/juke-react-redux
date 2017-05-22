import {
  SET_LYRICS
} from '../constants';

const initialLyricsState = {
  text: null
};

export default function (state = initialLyricsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_LYRICS:
      console.log('lyric reducer', action.text)
      newState.text = action.text;
      break;

    default:
      return state;

  }

  return newState;

}