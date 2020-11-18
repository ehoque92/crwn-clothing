// import SHOP_DATA from './shop.data';

// import { FALSE } from 'node-sass';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  // collections: SHOP_DATA
  collections: null,
  isFetching: false,
  errorMessage: undefined

};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFeteching: true
      }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFeching: false,
        collections: action.payload
      }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.paylod
      }

    default:
      return state;
  }
};

export default shopReducer;
