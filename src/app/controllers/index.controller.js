const jsonResponse = async function (req, res, next) {
  try {
    const response = {
      apresentação: "Seja bem-vindo a API do TaskList",
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { jsonResponse: jsonResponse };
