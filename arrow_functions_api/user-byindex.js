// updateUser Index, takes the index and the new value, if index exists then replace the element with the new value.


const users = ['Leo', 'Fernando', 'Mar', 'Toby', 'Alex'];
const sendReponse = (code, body = null) => {
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
   function updateUserByIndex(index, userName){
       if (index >= 0) {
       users.splice(index, 0, userName)
       console.log (users)
       return sendReponse(200);
     }
 }
 console.log(updateUserByIndex(4, "Oliver"));