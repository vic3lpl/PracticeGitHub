import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CALL_LOGIN_API
} from './types';

export const emailChanged = (text) =>{
  return{
    type:EMAIL_CHANGED,
    payload:text
  }
}

export const passwordChanged = (text) =>{
  return{
    type:PASSWORD_CHANGED,
    payload:text
  }
}

export const callLoginApi = ({email, password}) =>{
  return(dispatch) => {
    fetch("http://idealerapsx.azurewebsites.net/DealerLogin.aspx", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json', // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        "DealerID":email,
        "Password":password,
        "Version":'2017.10.13'
      })
    })
    .then((response) => {
      //console.log(response.json());
      return response.json();
    })
    .then((responseText) => {
      //alert(responseText.UserName);
      console.log(responseText);
      if (responseText.Result === 'True') {
        dispatch({
          type:CALL_LOGIN_API,
          payload:{bal:responseText.Balance,pID:responseText.PurchaseID}
        });
        //console.log("yeah");
        //Actions.register({id:'lim ai zhi', phoneNo:'017779863'});
      }

    })
    .catch((error) => {
      console.error(error);
    });
  }
}
