import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CALL_LOGIN_API
} from '../action/types';

const INITIAL_STATE = {
  email:'',
  password:'',
  dealerBal:0.00,
  purchaseID:''
};

export default (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case EMAIL_CHANGED:
      return{
        ...state,
        email:action.payload
      }
    case PASSWORD_CHANGED:
      return{
        ...state,
        password:action.payload
      }
    case CALL_LOGIN_API:
      console.log(action.payload.bal);
      return{
        ...state,
        dealerBal:action.payload.bal,
        purchaseID:action.payload.pID
      }
    default:
        return state;
  }
}
