
const initState = {
  counter: 0,
  values: [],
}

const reducer = (state = initState, action) => {
    if (action.type === 'INC') {
    console.log(state);
      return {
        ...state,
        counter: state.counter + action.value,
      }
    }
    return state;
}

export default reducer;