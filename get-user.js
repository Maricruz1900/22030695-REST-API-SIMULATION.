const users = ["Emmy", "Carlos", "Brandon", "Luis"];
function sendReponse(code, body = null) {
  const response = {
    code,
    body,
  };

  switch (code) {
    case 200:
      response.msg = "Ok";
      break;
    case 404:
      response.msg = "Not found";
      break;
  }
  return response;
}
const getUser = (userName) => {
  try {

    // Early return guard clauses
    if (!userName) {
      return sendReponse(400);
    }

    const userIndex = users.indexOf(userName);

    if (userIndex >= 0) {
      const user = users.at(userIndex);

      return sendReponse(200, user);
    }

    return sendReponse(404);
  } catch (error) {
    return sendReponse(400, error);
  }
};

console.log(getUser("Luisa"));