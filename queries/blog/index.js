const connection = require('../connection');

const getById = async function(id) {
  const mysql = require("mysql");

  // let connection = mysql.createConnection({
  //   host: "localhost",
  //   port: "3306",
  //   user: "root",
  //   password: "Ttab1998"
  // });

  // try {
  //   connection.connect(error => {
  //     if (error) throw error;
  //     console.log("Connected!");
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  let response;
  try {
    connection.query("USE AristotleTheAxolotl");
    response = new Promise((resolve, reject) => {
      connection.query("SELECT * FROM blog_posts WHERE postID = ?", id, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        resolve(results);
      });
    });
  } catch (error) {
    console.log(error);
  }

  return JSON.stringify(await response);
};

const getByNumber = async function(number) {
  const mysql = require("mysql");

  // let connection = mysql.createConnection({
  //   host: "localhost",
  //   port: "3306",
  //   user: "root",
  //   password: "Ttab1998"
  // });

  // try {
  //   connection.connect(error => {
  //     if (error) throw error;
  //     console.log("Connected!");
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  let response;
  try {
    connection.query("USE AristotleTheAxolotl");
    response = new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM blog_posts LIMIT ${number}`, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        resolve(results);
      });
    });
  } catch (error) {
    console.log(error);
  }

  return JSON.stringify(await response);
};

const getAll = async function() {
  // const mysql = require("mysql");

  // let connection = mysql.createConnection({
  //   host: "localhost",
  //   port: "3306",
  //   user: "root",
  //   password: "Ttab1998"
  // });

  // try {
  //   connection.connect(error => {
  //     if (error) throw error;
  //     console.log("Connected!");
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  let response;
  try {
    connection.query("USE AristotleTheAxolotl");
    response = new Promise((resolve, reject) => {
      connection.query("SELECT * FROM blog_posts", function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        resolve(results);
      });
    });
  } catch (error) {
    console.log(error);
  }

  return JSON.stringify(await response);
};

const post = async function(request) {
  // const mysql = require("mysql");

  // let connection = mysql.createConnection({
  //   host: "localhost",
  //   port: "3306",
  //   user: "root",
  //   password: "Ttab1998"
  // });

  // try {
  //   connection.connect(error => {
  //     if (error) throw error;
  //     console.log("Connected!");
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  let response;
  try {
    connection.query("USE AristotleTheAxolotl");
    response = new Promise((resolve, reject) => {
      connection.query("INSERT INTO `blog_posts` SET ?", request, function(
        error,
        results
      ) {
        if (error) throw error;
        resolve(results);
      });
    });
  } catch (error) {
    console.log(error);
  }

  return JSON.stringify(await response);
};

const kill = async function(){
  connection.end();
}

module.exports = {
  getById,
  getByNumber,
  getAll,
  post,
  kill
};
