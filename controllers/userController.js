const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

/**
 *@desc get all user data
 *@name GET  /api/v1/users
 * @access public
 */

const getAllUser = (req, res) => {
  const users = JSON.parse(
    readFileSync(path.join(__dirname, "../db/users.json"))
  );
  res.status(200).json(users);
};

/**
 *@desc Create user
 *@name POST  /api/v1/users
 * @access public
 */
const createUser = (req, res) => {
  const users = JSON.parse(
    readFileSync(path.join(__dirname, "../db/users.json"))
  );
  //get body data
  const { name, skill } = req.body;

  //validation
  if (!name || !skill) {
    res.status(400).json({
      message: "Name and skill is required",
    });
  } else {
    users.push({
      id: Math.floor(Math.random() * 1000000).toString(),
      name: name,
      skill: skill,
    });
    writeFileSync(
      path.join(__dirname, "../db/users.json"),
      JSON.stringify(users)
    );
    res.status(201).json({
      message: "User created successful",
    });
  }
};

//export module
module.exports = {
  getAllUser,
  createUser,
};
