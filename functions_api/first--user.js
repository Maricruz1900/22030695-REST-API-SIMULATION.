//removeFirstUser, removes the first element from the array, it returns the deleted element and the new array.
const User =['Leo', 'Fernando', 'Mar', 'Toby', 'Alex'];

function sendResponse(code, body = null) {
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

function fUser(){
  console.log(User.shift());
  console.log(User);
  return sendResponse(200, User);
}

console.log(fUser());
