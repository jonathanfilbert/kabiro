export function postNumber(number) {
  return {
    type: 'POST_NUMBER',
    payload: number,
  };
}

export function playRoulette() {
  return {
    type: 'PLAY_ONE',
  };
}

export function clearGame() {
  return {
    type: 'CLEAR_GAME',
  };
}
