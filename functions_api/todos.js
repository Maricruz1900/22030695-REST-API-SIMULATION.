//getUsers, return all existing users

const users = ['Leo', 'Fernando', 'Mar', 'Toby', 'Alex'];
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
};

const allUsers = () => {
  try {
    
    users.forEach(user => {
      console.log(user);
    });
    return sendResponse(200, users);
  } catch (error) {
    return sendResponse(500, error);
  }
};

console.log(allUsers());
