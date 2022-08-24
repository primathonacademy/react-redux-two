import Action from './action';

const initialState = {
  fact: '',
  error: false,
  errorMessage: '',
  successMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload.fact,
        successMessage: action.payload.successMessage,
        error: false,
        errorMessage: '',
      };

    case Action.FETCH_FACT_ERROR:
      return {
        ...state,
        fact: '',
        successMessage: '',
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default reducer;
