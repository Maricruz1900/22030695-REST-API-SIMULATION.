// removeLastUser, removes the last element from the array, it returns the deleted element and the new array.
const lastuser =['Leo', 'Fernando', 'Mar', 'Toby', 'Alex'];
 function sendReponse(code, body = null) {
     const response = {
       code,
       body,
};
switch (code) {
  case 200:
    response.msg = "Ok";
    break;
  case 400:
    response.msg = "Endpoint not valid";
    break;
  case 404:
    response.msg = "Not Found";
    break;
  case 500:
    response.msg = "Internal Server Error";
    break;
  default:
    response.msg = "Unknown status code";
}
return response;
 }
   function LastUser(userName){
     console.log(lastuser.pop());
     console.log(lastuser)
     return sendReponse(200, userName);
 }
  console.log(LastUser());