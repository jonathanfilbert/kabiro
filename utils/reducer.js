const initialState = {
  playerAmount: 0,
  chosenNumber: 0,
  currentNumber: 0,
};

export const numberReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'POST_NUMBER':
      let tempRandom = Math.floor(Math.random() * action.payload) + 1;
      console.log(tempRandom);
      return {
        ...state,
        playerAmount: action.payload,
        chosenNumber: tempRandom,
      };
    case 'PLAY_ONE':
      return {
        ...state,
        currentNumber: state.currentNumber + 1,
      };
    case 'CLEAR_GAME':
      console.log('CLEARR');
      return {
        playerAmount: 0,
        chosenNumber: 0,
        currentNumber: 0,
      };
    default:
      return state;
  }
};
