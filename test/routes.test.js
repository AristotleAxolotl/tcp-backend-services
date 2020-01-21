const server = require("../src/blog/app.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

describe(`Test API: `, () => {
  describe("GET Method", () => {
    beforeEach(async () => {
      console.log("Mocha starting!");
    });
    afterEach(async () => {
      server.close();
      console.log("server closed!");
    });
    describe("basic route tests", () => {
      it("get home route GET /", async () => {
        const response = await chai.request(server).get("/");
        console.log(response);
        expect(response.status).to.equal(200);
        expect(response.text).to.contain("Hello World!");
      });
    });
    describe("dogs routes test", async () => {
      it("get all dogs  GET /dogs", async () => {
        const response = await chai.request(server).get("/dogs");
        console.log(response);
        expect(response.status).to.equal(200);
      });
    });
  });
});
