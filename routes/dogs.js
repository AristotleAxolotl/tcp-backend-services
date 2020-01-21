const fetch = require('node-fetch');

module.exports = ({ dogRouter }) => {
  // getting the dogs route
  dogRouter.get("/", async (ctx, next) => {
    await fetch(`https://dog.ceo/api/breeds/list/all`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        ctx.body = response.body;
      })
      .catch(error => {
        console.log(error);
      });
  });
};
