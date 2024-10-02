// redux/reducers/backgroundReducer.js
const initialState = {
    backgroundColor: '#ffffff' // Varsayılan arka plan rengi
  };
  
  const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_BACKGROUND':
        return {
          ...state,
          backgroundColor: action.payload
        };
      default:
        return state;
    }
  };
  
  export default backgroundReducer;
  