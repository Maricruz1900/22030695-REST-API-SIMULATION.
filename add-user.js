const users = ['Mafer', 'Arturo', 'Lorena', 'Victor', 'Sol'];

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

const addUser = (userName) => {
  try {
    if (!userName) {
      return sendResponse(400);
    }

    if (users.includes(userName)) {
      return sendResponse(200, userName);
    }

    users.push(userName);
    return sendResponse(200, userName);
  } catch (error) {
    return sendResponse(500, error);
  }
};

console.log(addUser('Bingo'));
console.log(addUser(['Mafer', 'Arturo', 'Lorena', 'Victor', 'Sol', 'bingo']));



    