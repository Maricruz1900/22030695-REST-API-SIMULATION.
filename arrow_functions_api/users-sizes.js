// getUsersSize, return the number of users in the array.
const users = ['Mafer', 'Arturo', 'Lorena', 'Victor', 'Sol'];
 const sendReponse = (code, body = 5) => {
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
   function UsersSize(){
       console.log (users.length)
       return sendReponse(200);
     }
 console.log(UsersSize());