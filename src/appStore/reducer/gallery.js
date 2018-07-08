import * as actionTypes from '../actions/actionTypes';
const plusImgPath = '/plus.png'
const initialState = {
  images: []
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case actionTypes.ADD_IMAGE:
      return {
        ...state,
        images: state.images.concat(action.newImg)
      }

  }
  return state;
};

export default reducer;